import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Index() {
  const buttonStyle = {
    bgcolor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "100px",
    transition: "all .2s ease-in-out",
    px: 6,
    "&:hover": {
      bgcolor: "white",
      color: "black",
    },
  };
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Stack gap={2} alignItems="center" width="100%">
        <Box display="flex" justifyContent={"center"} sx={{ flex: 1 }}>
          <video
            src="https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP3t9vcgNKKMZ5ARy7PSx4wUxAQZhZxXLeCwMj8UrvhvU"
            controls
            width="80%"
          />
        </Box>
        <Stack alignItems="center" direction="row" gap={8}>
          <Button
            component={Link}
            to="/museo"
            variant="contained"
            sx={buttonStyle}
          >
            Conocer al Museo
          </Button>
          <Button
            sx={buttonStyle}
            component={Link}
            to="/ruta-de-la-memoria/A01"
            variant="contained"
          >
            Caminar por Siloé
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
