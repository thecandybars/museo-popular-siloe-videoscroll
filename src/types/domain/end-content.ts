export interface EndContentVideo {
  type: "video";
  src: string;
  title?: string;
}

export interface EndContentPhoto {
  type: "photo";
  src: string;
  title?: string;
  images: string[];
}

export type EndContent = EndContentVideo | EndContentPhoto;
