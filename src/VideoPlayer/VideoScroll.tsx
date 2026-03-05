import { useEffect, useState } from "react";
import useWheelCounter from "../hooks/useWheelCounter";
import VideoScrollNavigationHotspots from "./components/VideoScrollNavigationHotspots";
// import ScrollyVideo from "scrolly-video";
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";

import VideoScrollFooter from "./components/VideoScrollFooter";
import LoadingAnimation from "./components/LoadingAnimation";
import type { ScrollScene, WheelDirection } from "../types";
// import useWheelCounter from "../../customHooks/useWheelCounter";
// import LoadingAnimation from "../../LoadingAnimation";
// import VideoScrollFooter from "./components/VideoScrollFooter";
// import VideoScrollNavigationHotspots from "./components/VideoScrollNavigationHotspots";
// import LazyLoad from "react-lazyload";

export default function VideoScroll(props: ScrollScene) {
  // Esta funcion existe solo para resetear el scroll antes de cargar la pagina de VideoScroll y evitar re-renderizados
  window.scrollTo(0, 0);
  return <Page {...props} />;
}
function Page({
  src,
  speed,
  title,
  navigationHotspots = [],
  map,
  audioBackground,
  endContentTitle,
  endContentTop,
  endContentBottom,
}: ScrollScene) {
  const [loading, setLoading] = useState(true);
  const [scrollyPosition, setScrollyPosition] = useState(0);
  const { direction } = useWheelCounter({ scale: 30 }) as {
    frame: number;
    direction: WheelDirection;
  };

  // Cleanup video on unmount
  useEffect(() => {
    return () => {
      const videoElements = document.querySelectorAll("video");
      videoElements.forEach((video) => {
        video.pause();
        video.src = ""; // Clear the source to release memory
        video.load(); // Force garbage collection
      });
    };
  }, [src]);

  // HOTSPOTS
  const renderNavigationHotspots =
    // !loading &&
    navigationHotspots.map((hotspot, index, array) => {
      const isEndHotspot = index === array.length - 1;
      return (
        <VideoScrollNavigationHotspots
          key={hotspot.id}
          item={hotspot}
          scrollyPosition={scrollyPosition}
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
      className="scrolly-container"
      style={{
        width: "100%",
        height: `${speed}vh`,
      }}
    >
      {/* Conditional Loading */}
      <LoadingAnimation open={loading} />
      {/* Video Content */}
      {src && (
        <ScrollyVideo
          src={src}
          onChange={(currentTime: number) => setScrollyPosition(currentTime)}
          onReady={() => setLoading(false)}
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
