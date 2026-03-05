import type {
  AudioBackground,
  Coordinate,
  EndContent,
  Hotspot,
  HotspotLink,
  MapRoute,
} from "../domain";

export type WheelDirection = "up" | "down" | null;

export interface VideoScrollFooterProps {
  title: string;
  map: MapRoute;
  progress: number;
  audioSrc?: AudioBackground["src"];
}

export interface VideoScrollNavigationHotspotsProps {
  item: Hotspot;
  direction: WheelDirection;
  endContentTitle?: string | false;
  endContentTop?: EndContent | false;
  endContentBottom?: EndContent | false;
}

export interface VideoScrollMapProps {
  map: MapRoute;
  progress: number;
}

export interface MapaConRutaProps {
  points: Coordinate[];
  progress: number;
  width: number | string;
  height: number | string;
}

export type EndContentWithDescription = EndContent & { description?: string };

export interface VideoScrollContentsProps {
  content: EndContentWithDescription;
}

export interface PhotoContentProps {
  src: string;
  images?: string[];
}

export interface VideoScrollAudioPlayerProps {
  src?: string;
}

export interface MuteButtonProps {
  isOn: boolean;
  onClick: () => void;
}

export interface DirectionButtonProps {
  link: HotspotLink;
}
