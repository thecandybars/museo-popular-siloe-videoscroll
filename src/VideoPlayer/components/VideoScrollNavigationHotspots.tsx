import { Box, Dialog, Typography, Zoom, Stack } from "@mui/material";
import { forwardRef, useEffect } from "react";
import type { ElementType, ForwardedRef, ReactElement } from "react";
import type { TransitionProps } from "@mui/material/transitions";
import DirectionButton from "./DirectionButton";
import type { VideoScrollNavigationHotspotsProps } from "../../types";
import VideoScrollContents from "./VideoScrollContents";
import DirectionalMenu from "./DirectionalMenu";
import { Location } from "../../assets/icons";
// import VideoScrollContents from "./VideoScrollContents";

export default function VideoScrollNavigationHotspots({
  item,
  direction,
  setScrollyPosition,
  endContentTitle,
  endContent_A,
  endContent_B,
}: VideoScrollNavigationHotspotsProps) {
  console.log("🚀 ~ VideoScrollNavigationHotspots ~ direction:", direction);
  const navPills = item.links?.map((link) => ({
    [link.direction]: {
      label: link.title,
      link: link.href,
    },
  }));

  useEffect(() => {
    if (direction === "down") {
      setScrollyPosition(0.98);
    }
  }, [direction]);

  const Container: ElementType = item.isBlocking ? Dialog : Zoom;
  const containerProps = item.isBlocking
    ? // Dialog props
      {
        open: true,
        TransitionComponent: Transition,
        fullWidth: true,
        maxWidth: "xl" as const,
        sx: {
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
          },
        },
      }
    : // Zoom props
      {
        in: true,
        timeout: 1200,
      };

  return (
    <Box key={item.id} display="flex" justifyContent="center" width="100%">
      <Dialog
        open={true}
        slots={{ transition: Transition }}
        fullWidth={true}
        fullScreen={true}
        maxWidth="xl"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#00000080",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          },
        }}
      >
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            p: 1,
            fontFamily: "Roboto",
            width: "100%",
            height: "100vh",
          }}
          gap={3}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              fontFamily: "Roboto",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
          >
            <Location />
            {endContentTitle}
          </Typography>
          <DirectionalMenu
            centerLabel="¿HACIA DONDE QUIERES IR?"
            {...navPills[0]}
            {...navPills[1]}
            {...navPills[2]}
            {...navPills[3]}
          />
          {/* CONTENIDO ADICIONAL al final del scroll (AKA Paradas) */}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            sx={{
              width: "100%",
              bgcolor: "#000000aa",
              p: 1,
            }}
          >
            <Typography
              sx={{
                alignSelf: "flex-start",
                color: "#ffffffdd",
                fontFamily: "Nunito",
                fontSize: "16px",
              }}
            >
              Contenido relacionado
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              {endContent_A && <VideoScrollContents content={endContent_A} />}
              {endContent_B && <VideoScrollContents content={endContent_B} />}
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
    </Box>
  );
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement },
  ref: ForwardedRef<unknown>,
) {
  return <Zoom ref={ref} timeout={1200} {...props} />;
});
