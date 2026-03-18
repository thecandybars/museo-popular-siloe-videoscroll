import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  DirectionDown,
  DirectionLeft,
  DirectionRight,
  DirectionUp,
} from "../../assets/icons";

type DirectionItem = {
  label: string;
  link: string;
};

type DirectionalMenuProps = {
  centerLabel: string;
  up?: DirectionItem;
  down?: DirectionItem;
  left?: DirectionItem;
  right?: DirectionItem;
};

export default function DirectionalMenu({
  centerLabel,
  up,
  down,
  left,
  right,
}: DirectionalMenuProps) {
  return (
    <Stack
      color="white"
      justifyContent="center"
      alignItems="center"
      gap={2}
      flex={1}
      minWidth={0}
      width="100%"
    >
      <Box>
        {up ? (
          <Stack alignItems="center" gap={1} justifyContent="flex-end">
            <DirectionPillButton direction={up}>{up.label}</DirectionPillButton>
            <DirectionUp fontSize="large" sx={{ color: "white" }} />
          </Stack>
        ) : null}
      </Box>
      <Stack direction="row" alignItems="center" gap={2} width="100%">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
            minWidth: 0,
            width: "100%",
          }}
        >
          {left ? (
            <Stack
              alignItems="center"
              gap={1}
              direction="row"
              justifyContent="center"
            >
              <DirectionPillButton direction={left}>
                {left.label}
              </DirectionPillButton>
              <DirectionLeft fontSize="large" sx={{ color: "white" }} />
            </Stack>
          ) : null}
        </Box>
        <Box
          width="135px"
          height="135px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            p: 2,
            textAlign: "center",
            borderRadius: "100%",
            border: "1px solid white",
          }}
        >
          {centerLabel}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flex: 1,
            minWidth: 0,
            width: "100%",
          }}
        >
          {right ? (
            <Stack alignItems="center" gap={1} direction="row">
              <DirectionRight fontSize="large" sx={{ color: "white" }} />
              <DirectionPillButton direction={right}>
                {right.label}
              </DirectionPillButton>
            </Stack>
          ) : (
            <Box />
          )}
        </Box>
      </Stack>
      <Box>
        {down ? (
          <Stack alignItems="center" gap={1}>
            <DirectionDown fontSize="large" sx={{ color: "white" }} />
            <DirectionPillButton direction={down}>
              {down.label}
            </DirectionPillButton>
          </Stack>
        ) : null}
      </Box>
    </Stack>
  );
}

const DirectionPillButton = ({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: DirectionItem;
}) => (
  <Button
    variant="contained"
    sx={{
      border: "1px solid white",
      color: "white",
      bgcolor: "#000000aa",
      borderRadius: "100px",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      justifyContent: "center",
      alignItems: "center",
      px: 10,
      py: 1,
      fontSize: 12,
      transition: "all .2s ease-in-out",
      "&:hover": {
        border: "1px solid black",
        bgcolor: "#ffffffcc",
        color: "black",
        fontSize: 13,
      },
    }}
    component={Link}
    to={"/ruta-de-la-memoria" + direction.link}
    //   to={sanitizeURL(baseURL, link.href)}
  >
    {/* <ArrowIcon sx={{ ...styles.icon, color: "white" }} /> */}
    <Typography sx={{ fontSize: "inherit", fontFamily: "Roboto" }}>
      {direction.label}
    </Typography>
  </Button>
);
