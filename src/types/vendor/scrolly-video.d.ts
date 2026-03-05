declare module "scrolly-video/dist/ScrollyVideo.esm.jsx" {
  import type { FC } from "react";

  export interface ScrollyVideoProps {
    src: string;
    onChange?: (currentTime: number) => void;
    onReady?: () => void;
    cover?: boolean;
    preload?: string;
    debug?: boolean;
  }

  const ScrollyVideo: FC<ScrollyVideoProps>;
  export default ScrollyVideo;
}
