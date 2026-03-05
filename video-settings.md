ffmpeg command:
ffmpeg -i input.mp4 \
 -an \
 -vf "setpts=0.5\*PTS,fps=30" \
 -c:v libx264 -b:v 3000k -maxrate 3000k -bufsize 6000k \
 -movflags +faststart \
 -pix_fmt yuv420p \
output.mp4
