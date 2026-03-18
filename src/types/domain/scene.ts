import type { AudioBackground } from "./audio-background";
import type { EndContent } from "./end-content";
import type { Hotspot } from "./hotspot";
import type { MapRoute } from "./map-route";
import type { SceneId } from "./scene-id";

export type SceneType = "scroll" | "video";

interface BaseScene {
  src: string;
  type: SceneType;
  title: string;
  map?: MapRoute;
}

export interface ScrollScene extends BaseScene {
  caption: string;
  type: "scroll";
  speed: number;
  navigationHotspots: Hotspot[];
  endContentTitle?: string;
  endContent_A?: EndContent;
  endContent_B?: EndContent;
  audioBackground?: AudioBackground;
}

export interface VideoScene extends BaseScene {
  type: "video";
  startTime: number;
}

export type Scene = ScrollScene | VideoScene;

export type SceneRecord = Record<SceneId, Scene>;
