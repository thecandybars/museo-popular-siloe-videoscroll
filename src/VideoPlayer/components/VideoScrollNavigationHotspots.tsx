import { Box, Dialog, Typography, Zoom, Stack } from "@mui/material";
import { forwardRef, useEffect } from "react";
import type { ElementType, ForwardedRef, ReactElement } from "react";
import type { TransitionProps } from "@mui/material/transitions";
import DirectionButton from "./DirectionButton";
import type { VideoScrollNavigationHotspotsProps } from "../../types";
import VideoScrollContents from "./VideoScrollContents";
import DirectionalMenu from "./DirectionalMenu";
// import VideoScrollContents from "./VideoScrollContents";

export default function VideoScrollNavigationHotspots({
  item,
  direction,
  setScrollyPosition,
  endContentTitle,
  endContentTop,
  endContentBottom,
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
      <Container {...containerProps}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "100%",
            height: "100vh",
          }}
          gap={2}
        >
          <DirectionalMenu
            centerLabel="¿HACIA DONDE QUIERES IR?"
            {...navPills[0]}
            {...navPills[1]}
            {...navPills[2]}
            {...navPills[3]}
          />
          {/* <Typography variant="h2" align="center" color={"primary"}>
            {endContentTitle}
          </Typography> */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            {/* CONTENIDO ADICIONAL al final del scroll (AKA Paradas) */}
            {/* Necesita mas trabajo : se esta renderizando para cualquier hotspot, deberia solo renderizarse al final */}
            {endContentTop && <VideoScrollContents content={endContentTop} />}
            {/* {navButtons} */}
            {endContentBottom && (
              <VideoScrollContents content={endContentBottom} />
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement },
  ref: ForwardedRef<unknown>,
) {
  return <Zoom ref={ref} timeout={1200} {...props} />;
});
