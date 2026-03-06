import { Button, Typography } from "@mui/material";
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
    <div style={styles.root}>
      {/* Horizontal lane */}
      <div style={styles.horizontalLane}>
        <div style={{ ...styles.sideRegion, justifyContent: "flex-end" }}>
          {left ? (
            <div style={styles.leftGroup}>
              <DirectionPillButton direction={left}>
                {left.label}
              </DirectionPillButton>
              <DirectionLeft fontSize="large" sx={{ color: "white" }} />
            </div>
          ) : null}
        </div>

        <div style={styles.centerGap} />

        <div style={{ ...styles.sideRegion, justifyContent: "flex-start" }}>
          {right ? (
            <div style={styles.rightGroup}>
              <DirectionRight fontSize="large" sx={{ color: "white" }} />
              <DirectionPillButton direction={right}>
                {right.label}
              </DirectionPillButton>
            </div>
          ) : null}
        </div>
      </div>
      {/* Vertical lane */}
      <div style={styles.verticalLane}>
        <div style={styles.verticalRegion}>
          {up ? (
            <div style={styles.upGroup}>
              <DirectionPillButton direction={up}>
                {up.label}
              </DirectionPillButton>
              <DirectionUp fontSize="large" sx={{ color: "white" }} />
            </div>
          ) : null}
        </div>

        <div style={styles.verticalGap} />

        <div style={styles.verticalRegion}>
          {down ? (
            <div style={styles.downGroup}>
              <DirectionDown fontSize="large" sx={{ color: "white" }} />

              <DirectionPillButton direction={down}>
                {down.label}
              </DirectionPillButton>
            </div>
          ) : null}
        </div>
      </div>
      {/* Center circle */}
      <div style={styles.centerWrap}>
        <Typography sx={styles.centerCircle}>{centerLabel}</Typography>
      </div>
    </div>
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
    // color="secondary"
    // display="flex"
    // gap={1}
    sx={{
      border: "1px solid transparent",
      bgcolor: "#000000aa",
      borderRadius: "100px",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      justifyContent: "center",
      alignItems: "center",
      px: 6,
      py: 2,
      fontSize: 12,
      transition: "all .2s ease-in-out",
      "&:hover": {
        border: "1px solid white",
        bgcolor: "#000000cc",
        fontSize: 14,
      },
    }}
    component={Link}
    to={"/siloe" + direction.link}
    //   to={sanitizeURL(baseURL, link.href)}
  >
    {/* <ArrowIcon sx={{ ...styles.icon, color: "white" }} /> */}
    <Typography
      color="white"
      sx={{ fontSize: "inherit", fontFamily: "Roboto" }}
    >
      {direction.label}
    </Typography>
  </Button>
);

const CIRCLE_SIZE = 180;
const CENTER_GAP_X = 180;
const CENTER_GAP_Y = 160;

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: "relative",
    width: "100%",
    minHeight: 520,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  centerWrap: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 3,
  },

  centerCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.8)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 2,
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 1.2,
    textTransform: "uppercase",
  },

  horizontalLane: {
    position: "absolute",
    inset: 0,
    display: "grid",
    gridTemplateColumns: `1fr ${CENTER_GAP_X}px 1fr`,
    alignItems: "center",
    zIndex: 1,
    pointerEvents: "none",
  },

  verticalLane: {
    position: "absolute",
    inset: 0,
    display: "grid",
    gridTemplateRows: `1fr ${CENTER_GAP_Y}px 1fr`,
    justifyItems: "center",
    zIndex: 2,
    pointerEvents: "none",
  },

  sideRegion: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    padding: "0 32px",
    pointerEvents: "auto",
  },

  verticalRegion: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "24px 0",
    pointerEvents: "auto",
  },

  centerGap: {},
  verticalGap: {},

  leftGroup: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    maxWidth: "100%",
  },

  rightGroup: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    maxWidth: "100%",
  },

  upGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    maxWidth: "100%",
  },

  downGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    maxWidth: "100%",
  },

  pill: {
    border: "1px solid rgba(255,255,255,0.35)",
    background: "rgba(0,0,0,0.55)",
    color: "white",
    borderRadius: 999,
    padding: "14px 28px",
    minHeight: 52,
    minWidth: 220,
    maxWidth: 420,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 16,
    cursor: "pointer",
  },

  arrow: {
    color: "white",
    fontSize: 34,
    lineHeight: 1,
    userSelect: "none",
  },
};
