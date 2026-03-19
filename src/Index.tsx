import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export default function Index() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const [hasStarted, setHasStarted] = useState(false);

  const buttonStyle = {
    bgcolor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "100px",
    transition: "all .2s ease-in-out",
    px: 6,
    fontSize: "clamp(0.8rem, 1.1vw, 1.2rem)",
    "&:hover": {
      bgcolor: "white",
      color: "black",
    },
  };
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

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack
        height="100%"
        gap={2}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box
          ref={playerRef}
          sx={{
            position: "relative",
            width: "85%",
            height: "85%",
            bgcolor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            overflow: "hidden",
          }}
        >
          <Box
            component="video"
            ref={videoRef}
            src="https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP3t9vcgNKKMZ5ARy7PSx4wUxAQZhZxXLeCwMj8UrvhvU"
            onClick={togglePlay}
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "contain",
              bgcolor: "black",
              cursor: "pointer",
            }}
          />
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

                <IconButton
                  onClick={() => skipTime(-10)}
                  sx={{ color: "white" }}
                >
                  <Replay10Icon fontSize="large" />
                </IconButton>

                <IconButton
                  onClick={() => skipTime(10)}
                  sx={{ color: "white" }}
                >
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
                <Typography
                  variant="body2"
                  sx={{ color: "white", minWidth: 90 }}
                >
                  {formatTime(currentTime)} / {formatTime(duration)}
                </Typography>

                <IconButton onClick={toggleFullscreen} sx={{ color: "white" }}>
                  <FullscreenIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Stack
          alignItems="center"
          direction="row"
          gap={8}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Button
            component={Link}
            to="/museo"
            variant="contained"
            sx={buttonStyle}
          >
            Conocer el Museo
          </Button>

          <Button
            component={Link}
            to="/ruta-de-la-memoria/A01"
            variant="contained"
            sx={buttonStyle}
          >
            Caminar por Siloé
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
