export type HotspotDirection = "forward" | "left" | "right";

export interface HotspotLink {
  direction: HotspotDirection;
  title: string;
  href: string;
}
