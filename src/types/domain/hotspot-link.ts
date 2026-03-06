export type HotspotDirection = "up" | "down" | "left" | "right";

export interface HotspotLink {
  direction: HotspotDirection;
  title: string;
  href: string;
}
