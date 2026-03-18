import { Box, Stack, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import type { PhotoContentProps, VideoScrollContentsProps } from "../../types";

export default function VideoScrollContents({
  content,
}: VideoScrollContentsProps) {
  const renderVideo = content.type === "video" && (
    <Stack gap={1} color="grey" width="300px">
      <video src={content.src} controls height="200px" />
      <Typography
        sx={{ color: "gray", fontFamily: "Nunito", fontSize: "12px" }}
      >
        {content.title || null}
      </Typography>
      <Typography variant="body1" color="white">
        {content.description || null}
      </Typography>
    </Stack>
  );
  const renderPhoto = content.type === "photo" && (
    <Stack gap={1} color="grey" width="300px">
      <PhotoGallery src={content.src} images={content.images} />
      <Typography
        sx={{ color: "gray", fontFamily: "Nunito", fontSize: "12px" }}
      >
        {content.title || null}
      </Typography>
      <Typography variant="body1" color="white">
        {content.description || null}
      </Typography>
    </Stack>
  );
  return (
    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
      {renderVideo}
      {renderPhoto}
    </Box>
  );
}

function PhotoGallery({ src, images }: PhotoContentProps) {
  const styledGalleryItems = images?.map((image: string) => ({
    original: `${src}${image}`,
    originalClass: "photoGallery",
  })) as {
    original: string;
    originalClass: string;
  }[];

  return (
    <ImageGallery
      items={styledGalleryItems}
      showIndex={true}
      showNav={true}
      lazyLoad={true}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={true}
    />
  );
}
