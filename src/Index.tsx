import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const buttonStyle = {
  bgcolor: "transparent",
  color: "white",
  border: "1px solid white",
  borderRadius: "100px",
  transition: "all .2s ease-in-out",
  px: 6,
  fontSize: "clamp(0.8rem, 1.1vw, 1.2rem)",
  "&:hover": {
    bgcolor: "white",
    color: "black",
  },
};

export default function Index() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack
        height="100%"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ pb: 6 }}
      >
        <VideoPlayer
          type="video"
          startTime={0}
          title="Bienvenidos el Museo Popular de Siloé"
          showButtonHome={false}
          src="https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP3t9vcgNKKMZ5ARy7PSx4wUxAQZhZxXLeCwMj8UrvhvU"
          coverImage="/fondo.jpg"
        />
        <Stack
          alignItems="center"
          direction="row"
          gap={8}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Button
            component={Link}
            to="/museo"
            variant="contained"
            sx={buttonStyle}
          >
            Conocer el Museo
          </Button>

          <Button
            component={Link}
            to="/ruta-de-la-memoria/A01"
            variant="contained"
            sx={buttonStyle}
          >
            Caminar por Siloé
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
