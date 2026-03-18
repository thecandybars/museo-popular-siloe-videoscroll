import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Stack gap={2} alignItems="center" width="60%">
        <Typography variant="h1">Museo Popular de Siloé</Typography>
        <video
          src="https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP3t9vcgNKKMZ5ARy7PSx4wUxAQZhZxXLeCwMj8UrvhvU"
          controls
          width="100%"
        />
        <Box display="flex" gap={2}>
          <Button
            color="secondary"
            component={Link}
            to="/museo"
            variant="contained"
          >
            Entrar al Museo
          </Button>
          <Button
            color="secondary"
            component={Link}
            to="/ruta-de-la-memoria/A01"
            variant="contained"
          >
            Caminar por Siloé
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
