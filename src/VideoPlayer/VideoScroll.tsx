import { useEffect, useRef, useState } from "react";
import useWheelCounter from "../hooks/useWheelCounter";
import VideoScrollNavigationHotspots from "./components/VideoScrollNavigationHotspots";
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";
import VideoScrollFooter from "./components/VideoScrollFooter";
import LoadingAnimation from "./components/LoadingAnimation";
import type { ScrollScene, WheelDirection } from "../types";

interface VideoScrollProps extends ScrollScene {
  nextSrc?: string;
}

export default function VideoScroll({
  src,
  nextSrc,
  speed,
  title,
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
  const readyRafRef = useRef<number | null>(null);
  const latestScrollyPositionRef = useRef(0);
  const lastCommitTsRef = useRef(0);
  const { direction } = useWheelCounter() as {
    frame: number;
    direction: WheelDirection;
  };

  // Cleanup video on unmount
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setScrollyPosition(0);
    setShowHotspots(false);
    latestScrollyPositionRef.current = 0;
    lastCommitTsRef.current = 0;
    preloadedForSceneRef.current = null;
    if (readyRafRef.current !== null) {
      cancelAnimationFrame(readyRafRef.current);
      readyRafRef.current = null;
    }
    if (preloaderRef.current) {
      preloaderRef.current.pause();
      preloaderRef.current.remove();
      preloaderRef.current = null;
    }
    return () => {
      const videoElements: NodeListOf<HTMLVideoElement> | HTMLVideoElement[] =
        containerRef.current?.querySelectorAll("video") ?? [];
      videoElements.forEach((video) => {
        video.pause();
      });
    };
  }, [src]);

  // // Extra safety:
  // useEffect(() => {
  //   if (!loading) return;

  //   const start = performance.now();
  //   const interval = window.setInterval(() => {
  //     const video = containerRef.current?.querySelector("video");
  //     console.log("🚀 ~ VideoScroll ~ video:", video.readyState);
  //     if (!video) return;

  //     // 2 = HAVE_CURRENT_DATA, 3/4 are even better
  //     if (video.readyState >= 2) {
  //       setLoading(false);
  //       window.clearInterval(interval);
  //       return;
  //     }

  //     if (performance.now() - start > 100_000) {
  //       // Fallback: stop spinner even if lib never called onReady
  //       setLoading(false);
  //       window.clearInterval(interval);
  //     }
  //   }, 200);

  //   return () => window.clearInterval(interval);
  // }, [loading]);

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

  // HOTSPOTS
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
  const srcPrefix = src.startsWith("/")
    ? ""
    : "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/";
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
      {/* Loading */}
      <LoadingAnimation open={loading} />
      {/* Video Content */}
      {src && (
        <ScrollyVideo
          key={src}
          src={srcPrefix + src}
          onChange={(currentTime: number) => {
            latestScrollyPositionRef.current = currentTime;
            const now = performance.now();
            if (now - lastCommitTsRef.current >= 100) {
              lastCommitTsRef.current = now;
              setScrollyPosition(currentTime);
            }
            if (currentTime >= 0.999) setShowHotspots(true);
          }}
          onReady={() => {
            readyRafRef.current = requestAnimationFrame(() => {
              setLoading(false);
              readyRafRef.current = null;
            });
          }}
          cover={true}
          preload="metadata"
          debug={false}
        />
      )}
      {/* Hotspots */}
      {renderNavigationHotspots}
      {/* Footer */}
      <VideoScrollFooter
        title={
          title || src.slice(src.lastIndexOf("/") + 1, src.lastIndexOf("."))
        }
        map={map}
        progress={scrollyPosition}
        audioSrc={audioBackground?.src}
      />
    </div>
  );
}
