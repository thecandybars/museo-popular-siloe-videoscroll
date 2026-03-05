import { useEffect, useRef, useState } from "react";
import useWheelCounter from "../hooks/useWheelCounter";
import VideoScrollNavigationHotspots from "./components/VideoScrollNavigationHotspots";
// import ScrollyVideo from "scrolly-video";
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";

import VideoScrollFooter from "./components/VideoScrollFooter";
import LoadingAnimation from "./components/LoadingAnimation";
import type { ScrollScene, WheelDirection } from "../types";
// import LazyLoad from "react-lazyload";

interface VideoScrollProps extends ScrollScene {
  nextSrc?: string;
}

export default function VideoScroll(props: VideoScrollProps) {
  // Esta funcion existe solo para resetear el scroll antes de cargar la pagina de VideoScroll y evitar re-renderizados
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.src]);
  return <Page {...props} />;
}
function Page({
  src,
  nextSrc,
  speed,
  title,
  navigationHotspots = [],
  map,
  audioBackground,
  endContentTitle,
  endContentTop,
  endContentBottom,
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
    console.log("Scene changed, resetting state and cleaning up videos.");
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
      console.log("Cleaning up videos on unmount.");
      const videoElements: NodeListOf<HTMLVideoElement> | HTMLVideoElement[] =
        containerRef.current?.querySelectorAll("video") ?? [];
      videoElements.forEach((video) => {
        video.pause();
      });
    };
  }, [src]);

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
          endContentTitle={isEndHotspot && endContentTitle}
          endContentTop={isEndHotspot && endContentTop}
          endContentBottom={isEndHotspot && endContentBottom}
        />
      );
    });
  return (
    // <LazyLoad once unmountIfInvisible={false}>
    <div
      ref={containerRef}
      className="scrolly-container"
      style={{
        width: "100%",
        height: `${speed}vh`,
        backgroundColor: "#000",
      }}
    >
      {/* Conditional Loading */}
      <LoadingAnimation open={loading} />
      {/* Video Content */}
      {src && (
        <ScrollyVideo
          key={src}
          src={src}
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
            console.log("Video ready");
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
    // </LazyLoad>
  );
}
