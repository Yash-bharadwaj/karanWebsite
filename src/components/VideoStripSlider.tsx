"use client";

import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export type VideoSlide = {
  src: string;
  poster?: string;
  title?: string;
  startTime?: number;
};

type VideoStripSliderProps = {
  videos: VideoSlide[];
  autoAdvanceMs?: number;
};

export default function VideoStripSlider({
  videos,
  autoAdvanceMs = 8000,
}: VideoStripSliderProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), autoAdvanceMs);
    return () => clearInterval(id);
  }, [api, autoAdvanceMs]);

  // Set start time for videos when they become visible
  useEffect(() => {
    const handleSlideChange = () => {
      if (!api) return;
      
      const currentIndex = api.selectedScrollSnap();
      const currentVideo = videoRefs.current[currentIndex];
      
      if (currentVideo && videos[currentIndex]?.startTime) {
        currentVideo.currentTime = videos[currentIndex].startTime!;
      }
    };

    if (api) {
      api.on('select', handleSlideChange);
      return () => {
        api.off('select', handleSlideChange);
      };
    }
  }, [api, videos]);

  // Set start time for videos when they first load
  useEffect(() => {
    const handleVideoLoad = (video: HTMLVideoElement, startTime: number) => {
      if (video.readyState >= 1) {
        video.currentTime = startTime;
      } else {
        video.addEventListener('loadedmetadata', () => {
          video.currentTime = startTime;
        }, { once: true });
      }
    };

    // Set start time for all videos that have startTime defined
    videos.forEach((video, index) => {
      if (video.startTime && videoRefs.current[index]) {
        handleVideoLoad(videoRefs.current[index]!, video.startTime);
      }
    });
  }, [videos]);

  return (
    <div className="relative w-full">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
        <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
          {videos.map((v, idx) => (
            <CarouselItem
              key={idx}
              className="pl-2 sm:pl-3 md:pl-4 basis-[90%] sm:basis-[70%] md:basis-[50%] lg:basis-[33%] xl:basis-[28%]"
            >
              <div className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] bg-black rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={v.src}
                  poster={v.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 md:left-6 bg-white/70 backdrop-blur hover:bg-white text-black border-0" />
        <CarouselNext className="right-3 md:right-6 bg-white/70 backdrop-blur hover:bg-white text-black border-0" />
      </Carousel>
    </div>
  );
}

