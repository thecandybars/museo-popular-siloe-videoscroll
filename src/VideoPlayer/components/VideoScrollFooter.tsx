import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import { useState } from "react";
import VideoScrollMap from "./VideoScrollMap";
import VideoScrollAudioPlayer from "./VideoScrollAudioPlayer";
import { CancelIcon, HelpIcon } from "../../assets/icons";
import type { VideoScrollFooterProps } from "../../types";

export default function VideoScrollFooter({
  caption,
  map,
  progress,
  audioSrc,
}: VideoScrollFooterProps) {
  // HELP
  const [openHelp, setOpenHelp] = useState(false);
  const renderHelpDialog = (
    <Dialog
      open={openHelp}
      fullScreen
      fullWidth
      onClose={() => setOpenHelp(false)}
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "transparent",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        },
      }}
    >
      <Stack
        p={4}
        gap={4}
        alignItems={"center"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          height: "100%",
        }}
      >
        <img src="/navegacion.svg" height="100px" width="100px" />
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontSize: "1.2rem", px: 10 }}
        >
          Usa el scroll o desplaza hacia arriba o hacia abajo para recorrer la
          memoria de Siloé
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setOpenHelp(false)}
          sx={{
            px: 3,
            py: 1,
            minWidth: 0,
            borderRadius: "99px",
          }}
        >
          Continuar
        </Button>
      </Stack>
    </Dialog>
  );
  return (
    <Stack
      gap={4}
      width={1}
      display="flex"
      flexDirection={"row"}
      alignItems={"end"}
      sx={{ position: "fixed", bottom: 0, left: 0, p: 3 }}
    >
      <VideoScrollMap map={map} progress={progress} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        gap={4}
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h4"
          color="white"
          sx={{
            display: "flex",
            flex: 0.9,
            py: 3,
            px: 3,
            bgcolor: "#00000080",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            borderRadius: "99px",
          }}
        >
          {caption}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          sx={{
            py: 2,
            px: 3,
            bgcolor: "#00000080",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            borderRadius: "99px",
          }}
        >
          <VideoScrollAudioPlayer src={audioSrc} />
          <Button
            sx={{
              border: "0.5px solid #FCFAF5",
              bgcolor: "transparent",
              p: 1,
              width: 32,
              height: 32,
              minWidth: 32,
              minHeight: 32,
              borderRadius: "100%",
            }}
            onClick={() => setOpenHelp((prev) => !prev)}
          >
            <HelpIcon fontSize="small" sx={{ color: "#ffffff80" }} />
          </Button>
        </Stack>
      </Stack>
      {renderHelpDialog}
    </Stack>
  );
}
