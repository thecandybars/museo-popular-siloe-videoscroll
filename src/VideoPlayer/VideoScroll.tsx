import { useEffect, useRef, useState } from "react";
import useWheelCounter from "../hooks/useWheelCounter";
import VideoScrollNavigationHotspots from "./components/VideoScrollNavigationHotspots";
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";
import VideoScrollFooter from "./components/VideoScrollFooter";
import LoadingAnimation from "./components/LoadingAnimation";
import type { ScrollScene, WheelDirection } from "../types";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import ButtonHome from "./components/ButtonHome";

interface VideoScrollProps extends ScrollScene {
  nextSrc?: string;
}

export default function VideoScroll({
  src,
  nextSrc,
  speed,
  title,
  caption,
  navigationHotspots = [],
  map,
  audioBackground,
  endContentTitle,
  endContent_A,
  endContent_B,
}: VideoScrollProps) {
  const [loading, setLoading] = useState(true);
  const [scrollyPosition, setScrollyPosition] = useState(0);
  const [showHotspots, setShowHotspots] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const preloaderRef = useRef<HTMLVideoElement | null>(null);
  const preloadedForSceneRef = useRef<string | null>(null);
  const latestScrollyPositionRef = useRef(0);
  const lastCommitTsRef = useRef(0);
  const hotspotsShownRef = useRef(false);

  const { direction } = useWheelCounter() as {
    frame: number;
    direction: WheelDirection;
  };

  /**
   * Reset scene-related UI state every time the source changes.
   * Also capture the current host node so cleanup uses a stable reference
   * and does not trigger the React ref warning.
   */
  useEffect(() => {
    const host = containerRef.current;

    window.scrollTo(0, 0);
    setLoading(true);
    setScrollyPosition(0);
    setShowHotspots(false);

    latestScrollyPositionRef.current = 0;
    lastCommitTsRef.current = 0;
    preloadedForSceneRef.current = null;
    hotspotsShownRef.current = false;

    if (preloaderRef.current) {
      preloaderRef.current.pause();
      preloaderRef.current.remove();
      preloaderRef.current = null;
    }

    return () => {
      const videoElements: NodeListOf<HTMLVideoElement> | HTMLVideoElement[] =
        host?.querySelectorAll("video") ?? [];

      videoElements.forEach((video) => {
        video.pause();
      });
    };
  }, [src]);

  /**
   * When useWebCodecs={false}, ScrollyVideo's onReady may never fire.
   * So instead of relying on the library callback, we detect when the
   * inner <video> element is actually ready enough to display a frame.
   */

  useEffect(() => {
    if (!loading) return;

    const host = containerRef.current;
    if (!host) return;

    let cleanupVideoListeners: (() => void) | undefined;
    let intervalId: number | undefined;
    let cancelled = false;

    const MIN_BUFFERED_SECONDS = 10;
    const MIN_VISIBLE_LOADING_MS = 3000;
    const effectStartTs = performance.now();

    const hasEnoughBuffered = (video: HTMLVideoElement) => {
      const ranges = video.buffered;
      if (!ranges || ranges.length === 0) return false;

      // Require a buffered range that actually starts near the beginning
      for (let i = 0; i < ranges.length; i++) {
        const start = ranges.start(i);
        const end = ranges.end(i);
        if (start <= 0.1 && end >= MIN_BUFFERED_SECONDS) {
          return true;
        }
      }

      return false;
    };

    const maybeMarkReady = (video: HTMLVideoElement) => {
      if (cancelled) return;

      const enoughData = video.readyState >= 4;
      const enoughBuffered = hasEnoughBuffered(video);
      const enoughTimePassed =
        performance.now() - effectStartTs >= MIN_VISIBLE_LOADING_MS;

      if (enoughData && enoughBuffered && enoughTimePassed) {
        cleanupVideoListeners?.();
        setLoading(false);
      }
    };

    const bindToVideo = () => {
      const video = host.querySelector("video");
      if (!video) return false;

      const tryReady = () => {
        maybeMarkReady(video);
      };

      video.addEventListener("loadeddata", tryReady);
      video.addEventListener("canplay", tryReady);
      video.addEventListener("progress", tryReady);

      cleanupVideoListeners = () => {
        video.removeEventListener("loadeddata", tryReady);
        video.removeEventListener("canplay", tryReady);
        video.removeEventListener("progress", tryReady);
      };

      // Check immediately too
      tryReady();

      return true;
    };

    const boundNow = bindToVideo();

    if (!boundNow) {
      intervalId = window.setInterval(() => {
        const video = host.querySelector("video");
        if (!video) return;

        const bound = bindToVideo();
        if (bound && intervalId) {
          window.clearInterval(intervalId);
          intervalId = undefined;
        }
      }, 100);
    }

    // Keep checking until minimum wall-clock time has passed,
    // even if no media events fire after initial buffering.
    const timerId = window.setInterval(() => {
      const video = host.querySelector("video");
      if (video) maybeMarkReady(video);
    }, 100);

    return () => {
      cancelled = true;
      if (intervalId) window.clearInterval(intervalId);
      window.clearInterval(timerId);
      cleanupVideoListeners?.();
    };
  }, [src, loading]);

  /**
   * Preload only metadata for the next scene's video.
   * This is lightweight and helps reduce the delay before the next scene starts.
   */
  useEffect(() => {
    if (loading || !nextSrc) return;
    if (preloadedForSceneRef.current === src) return;

    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    if (connection?.saveData) return;

    const host = containerRef.current;
    if (!host) return;

    const preloader = document.createElement("video");
    preloader.preload = "metadata";
    preloader.muted = true;
    preloader.playsInline = true;
    preloader.style.display = "none";
    preloader.src = nextSrc;

    const handleLoadedMetadata = () => {
      if (preloaderRef.current === preloader) {
        preloader.pause();
        preloader.remove();
        preloaderRef.current = null;
      }
    };

    preloader.addEventListener("loadedmetadata", handleLoadedMetadata, {
      once: true,
    });

    host.appendChild(preloader);
    preloader.load();

    preloaderRef.current = preloader;
    preloadedForSceneRef.current = src;

    return () => {
      preloader.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (preloaderRef.current === preloader) {
        preloader.pause();
        preloader.remove();
        preloaderRef.current = null;
      }
    };
  }, [loading, nextSrc, src]);

  const renderNavigationHotspots =
    showHotspots &&
    navigationHotspots.map((hotspot, index, array) => {
      const isEndHotspot = index === array.length - 1;

      return (
        <VideoScrollNavigationHotspots
          key={hotspot.id}
          item={hotspot}
          direction={direction}
          setScrollyPosition={setScrollyPosition}
          endContentTitle={isEndHotspot && endContentTitle}
          endContent_A={isEndHotspot && endContent_A}
          endContent_B={isEndHotspot && endContent_B}
        />
      );
    });

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen failed:", error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="scrolly-container"
      style={{
        width: "100%",
        height: `${speed}vh`,
        backgroundColor: "#000",
      }}
    >
      <LoadingAnimation open={loading} />

      {src && (
        <ScrollyVideo
          transitionSpeed={4}
          key={src}
          src={src}
          useWebCodecs={true}
          cover={true}
          onChange={(currentTime: number) => {
            latestScrollyPositionRef.current = currentTime;

            const now = performance.now();
            if (now - lastCommitTsRef.current >= 200) {
              lastCommitTsRef.current = now;
              setScrollyPosition(currentTime);
            }

            // Show hotspots only once when the scene reaches the end.
            if (currentTime >= 0.999 && !hotspotsShownRef.current) {
              hotspotsShownRef.current = true;
              setShowHotspots(true);
            }
          }}
        />
      )}
      <Stack
        direction="row"
        gap={2}
        position="fixed"
        top="24px"
        left="12px"
        width="600px"
      >
        <ButtonHome />
        <Typography
          variant="h4"
          color="white"
          sx={{
            display: "flex",
            alignItems: "center",
            // flex: 0.9,
            py: 1,
            px: 2,
            bgcolor: "#00000080",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            borderRadius: "10px",
          }}
        >
          {title}
        </Typography>
      </Stack>

      {renderNavigationHotspots}

      <VideoScrollFooter
        caption={caption}
        map={map}
        progress={scrollyPosition}
        audioSrc={audioBackground?.src}
        onFullscreen={toggleFullscreen}
      />
    </div>
  );
}
