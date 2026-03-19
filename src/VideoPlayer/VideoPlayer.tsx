import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { VideoScene } from "../types";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ButtonHome from "./components/ButtonHome";

export default function VideoPlayer({
  src,
  title,
  startTime = 0,
  showButtonHome = true,
  // map,
}: VideoScene) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const hideUiTimeoutRef = useRef<number | null>(null);
  const [showOverlayUi, setShowOverlayUi] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const navigate = useNavigate();

  const sliderSx = {
    color: "#6ec9c3",
    height: 4,
    padding: "10px 0",
    "& .MuiSlider-rail": {
      opacity: 1,
      backgroundColor: "rgba(255,255,255,0.28)",
    },
    "& .MuiSlider-track": {
      border: "none",
      backgroundColor: "#6ec9c3",
    },
    "& .MuiSlider-thumb": {
      width: 18,
      height: 18,
      backgroundColor: "#6ec9c3",
      boxShadow: "none",
      "&:hover, &.Mui-focusVisible, &.Mui-active": {
        boxShadow: "0 0 0 6px rgba(103,232,249,0.16)",
      },
      "&::before": {
        display: "none",
      },
    },
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration || 0);
      video.currentTime = startTime;
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("volumechange", handleVolumeChange);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("volumechange", handleVolumeChange);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setHasStarted(true);
      } catch (error) {
        console.error("Falló la reproducción del video:", error);
      }
    } else {
      video.pause();
    }
  };

  const skipTime = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Math.min(
      Math.max(video.currentTime + seconds, 0),
      duration || 0,
    );
    video.currentTime = nextTime;
  };

  const handleSeek = (_: Event, value: number | number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Array.isArray(value) ? value[0] : value;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolume = (_: Event, value: number | number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const nextVolume = Array.isArray(value) ? value[0] : value;
    const normalized = nextVolume / 100;

    video.volume = normalized;
    video.muted = normalized === 0;
    setVolume(normalized);
    setIsMuted(normalized === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = async () => {
    const container = playerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen failed:", error);
    }
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // HELPERS
  const clearHideUiTimeout = () => {
    if (hideUiTimeoutRef.current) {
      window.clearTimeout(hideUiTimeoutRef.current);
      hideUiTimeoutRef.current = null;
    }
  };

  const scheduleHideUi = () => {
    clearHideUiTimeout();

    hideUiTimeoutRef.current = window.setTimeout(() => {
      setShowOverlayUi(false);
    }, 5000);
  };

  const handlePlayerMouseMove = () => {
    setShowOverlayUi(true);
    scheduleHideUi();
  };

  const handlePlayerMouseLeave = () => {
    clearHideUiTimeout();
    setShowOverlayUi(false);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      clearHideUiTimeout();
    };
  }, []);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Box
        ref={playerRef}
        onMouseMove={handlePlayerMouseMove}
        onMouseLeave={handlePlayerMouseLeave}
        sx={{
          position: "relative",
          width: "85%",
          height: "85%",
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <Box
          component="video"
          ref={videoRef}
          src={src}
          onClick={togglePlay}
          onEnded={() => {
            navigate("/");
          }}
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "contain",
            bgcolor: "black",
            cursor: "pointer",
          }}
        />

        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            px: 2,
            py: 1.5,
            opacity: showOverlayUi ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.28), rgba(0,0,0,0))",
          }}
        >
          {title && (
            <Typography
              sx={{
                bgcolor: "#000000aa",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: 0,
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
                width: "max-content",
                pl: 1,
                pr: 6,
                py: 1,
                fontFamily: "Roboto",
                color: "white",
                fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
                // fontWeight: 600,
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              {title}
            </Typography>
          )}
        </Box> */}

        <Stack
          direction="row"
          gap={2}
          // width="600px"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            px: 2,
            py: 1.5,
            opacity: showOverlayUi ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: "all",
            cursor: "default",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.28), rgba(0,0,0,0))",
          }}
        >
          {showButtonHome && <ButtonHome />}
          <Typography
            variant="h4"
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
              // flex: 0.9,
              py: 1,
              px: 2,
              bgcolor: "#00000080",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              borderRadius: "10px",
            }}
          >
            {title}
          </Typography>
        </Stack>

        {!hasStarted && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <IconButton
              onClick={togglePlay}
              sx={{
                pointerEvents: "auto",
                width: 96,
                height: 96,
                bgcolor: "rgba(0,0,0,0.45)",
                color: "white",
                border: "2px solid rgba(255,255,255,0.8)",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.6)",
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 54 }} />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            px: 2,
            py: 1.5,
            opacity: showOverlayUi ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: showOverlayUi ? "auto" : "none",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.45), rgba(0,0,0,0))",
          }}
        >
          <Slider
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
            sx={{ ...sliderSx, mb: 1.2 }}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <IconButton onClick={togglePlay} sx={{ color: "white" }}>
                {isPlaying ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayArrowIcon fontSize="large" />
                )}
              </IconButton>

              <IconButton onClick={() => skipTime(-10)} sx={{ color: "white" }}>
                <Replay10Icon fontSize="large" />
              </IconButton>

              <IconButton onClick={() => skipTime(10)} sx={{ color: "white" }}>
                <Forward10Icon fontSize="large" />
              </IconButton>

              <IconButton onClick={toggleMute} sx={{ color: "white" }}>
                {isMuted || volume === 0 ? (
                  <VolumeOffIcon fontSize="large" />
                ) : (
                  <VolumeUpIcon fontSize="large" />
                )}
              </IconButton>

              <Box sx={{ width: 110, mx: 1 }}>
                <Slider
                  min={0}
                  max={100}
                  value={isMuted ? 0 : Math.round(volume * 100)}
                  onChange={handleVolume}
                  sx={{
                    ...sliderSx,
                    "& .MuiSlider-thumb": {
                      ...sliderSx["& .MuiSlider-thumb"],
                      bgcolor: "#f5fcfd",
                    },
                  }}
                />
              </Box>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" sx={{ color: "white", minWidth: 90 }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </Typography>

              <IconButton onClick={toggleFullscreen} sx={{ color: "white" }}>
                <FullscreenIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
