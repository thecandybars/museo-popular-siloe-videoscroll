import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
      <Typography variant="h4" color="white">
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
      <Typography variant="h4" color="white">
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

export function PhotoCarousel({ src, images = [] }: PhotoContentProps) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      loop
    >
      {images.map((image: string, index: number) => (
        <SwiperSlide key={index}>
          <img
            src={`${src}/${image}`}
            alt={`Slide ${index + 1}`}
            style={{ width: "auto", height: "200px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function PhotoGallery({ src, images }: PhotoContentProps) {
  const styledGalleryItems = images?.map((image: string) => ({
    original: `${src}/${image}`,
    originalClass: "photoGallery",
  })) as {
    original: string;
    originalClass: string;
  }[];

  const renderPhotoGallery = (
    <ImageGallery
      items={styledGalleryItems}
      // showBullets={true}
      showIndex={true}
      showNav={true}
      lazyLoad={true}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );

  return (
    <Box
      sx={{
        margin: "0 auto",
        // height: "600px",
      }}
    >
      {renderPhotoGallery}
    </Box>
  );
}
