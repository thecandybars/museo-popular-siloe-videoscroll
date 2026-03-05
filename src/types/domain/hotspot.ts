import type { HotspotLink } from "./hotspot-link";

export interface Hotspot {
  id: number;
  timeIn: number;
  timeOut: number;
  isBlocking: boolean;
  links: HotspotLink[];
}
