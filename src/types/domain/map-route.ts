export type Coordinate = [number, number];

export interface MapRoute {
  points: Coordinate[];
  zoom?: number;
}
