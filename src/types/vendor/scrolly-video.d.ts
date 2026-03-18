declare module "scrolly-video/dist/ScrollyVideo.esm.jsx" {
  import * as React from "react";

  export interface ScrollyVideoProps {
    src: string;
    onChange?: (currentTime: number) => void;
    onReady?: () => void;
    cover?: boolean;
    preload?: string;
    debug?: boolean;
    useWebCodecs?: boolean;
    transitionSpeed?: number;
  }

  const ScrollyVideo: React.FC<ScrollyVideoProps>;
  export default ScrollyVideo;
}
