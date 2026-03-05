import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingAnimation({
  open,
  text,
}: {
  open: boolean;
  text?: string;
}) {
  return (
    open && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="secondary" />
        <Typography variant="h6" color="secondary" sx={{ ml: 2 }}>
          {`${text || "Cargando..."}`}
        </Typography>
      </Box>
    )
  );
}
