declare module "react-map-gl" {
  import type { FC } from "react";

  const Map: FC<Record<string, unknown>>;
  export const Marker: FC<Record<string, unknown>>;
  export const Source: FC<Record<string, unknown>>;
  export const Layer: FC<Record<string, unknown>>;

  export default Map;
}

declare module "react-image-gallery" {
  import type { FC } from "react";

  interface GalleryItem {
    original: string;
    originalClass?: string;
  }

  interface ImageGalleryProps {
    items: GalleryItem[];
    showIndex?: boolean;
    showNav?: boolean;
    lazyLoad?: boolean;
    showThumbnails?: boolean;
    showPlayButton?: boolean;
    showFullscreenButton?: boolean;
  }

  const ImageGallery: FC<ImageGalleryProps>;
  export default ImageGallery;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
