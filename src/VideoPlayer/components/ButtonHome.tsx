import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Home } from "../../assets/icons";

export default function ButtonHome() {
  return (
    <Button
      variant="contained"
      component={Link}
      to="/"
      sx={{
        py: 1,
        px: 2,
        bgcolor: "#00000080",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        borderRadius: "10px",
        "&:hover": {
          bgcolor: "#000000cc",
        },
      }}
    >
      <Home fontSize="large" sx={{ color: "white" }} />
    </Button>
  );
}
