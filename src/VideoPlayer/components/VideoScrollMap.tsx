import { Box } from "@mui/material";
import type { VideoScrollMapProps } from "../../types";
import MapaConRuta from "./MapaConRuta";
// import MapaConRuta from "./MapaConRuta";

export default function VideoScrollMap({ map, progress }: VideoScrollMapProps) {
  return (
    <Box
      sx={{
        zIndex: 1000,
      }}
    >
      <MapaConRuta
        points={map.points.map((point) => [point[1], point[0]])}
        progress={progress}
        width={152}
        height={152}
      />
    </Box>
  );
}
