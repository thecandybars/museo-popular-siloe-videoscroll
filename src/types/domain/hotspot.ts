import type { HotspotLink } from "./hotspot-link";

export interface Hotspot {
  id: number;
  isBlocking: boolean;
  links: HotspotLink[];
}
