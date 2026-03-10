ffmpeg -i input.mp4 \
 -an \
 -vf "scale=1280:720,setsar=1,fps=30,setpts=0.5\*PTS" \
 -c:v libx264 -b:v 3000k -maxrate 3000k -bufsize 6000k \
 -g 60 -keyint_min 60 -sc_threshold 0 \
 -movflags +faststart \
 -pix_fmt yuv420p \
 output.mp4
