import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

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

export default function Index() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack
        height="100%"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ pb: 6 }}
      >
        {/* <Box
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
          <Box
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
            <Typography
              sx={{
                color: "white",
                fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
                fontWeight: 600,
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              Título de ejemplo del video
            </Typography>
          </Box>
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
        </Box> */}

        <VideoPlayer
          type="video"
          startTime={0}
          title="Bienvenidos el Museo Popular de Siloé"
          src="https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP3t9vcgNKKMZ5ARy7PSx4wUxAQZhZxXLeCwMj8UrvhvU"
        />

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
