"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import data from "@/data/solutions.json";
import { CIRCUMFERENCE, RADIUS, STROKE } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import swiper css
import "swiper/css";
import "swiper/css/pagination";

const SolutionSection = () => {
  const { items } = data;
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState(
    items[0]?.parts[0]?.videoSrc || ""
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeItem = items[activeTab];

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play();
      setIsPlaying(true);
    }
  }, [activeVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const current = video.currentTime;
      const total = video.duration;
      const percent = total ? (current / total) * 100 : 0;
      setProgress(percent);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [activeVideo]);

  console.log(data);

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="container text-white py-20 px-5">
        <h3 className="md:text-5xl text-4xl font-light text-center">
          Evolving the drive with <b className="font-semibold">360-degree</b>{" "}
          <br />
          nonwoven solutions
        </h3>
        {/* large */}
        <div className="hidden lg:flex justify-between mt-20">
          <div className="sticky top-[80px] self-start">
            {items.map(({ category, description }, index) => (
              <button
                className="flex gap-8 h-fit"
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setActiveVideo(items[index]?.parts[0]?.videoSrc || "");
                }}
              >
                <div
                  className={`bg-white w-1 h-[150px] ${
                    activeTab === index ? "opacity-100" : "opacity-50"
                  }`}
                ></div>

                <div
                  className={`w-[330px] h-[150px] flex flex-col gap-2 cursor-pointer text-left ${
                    activeTab === index ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <p className="text-2xl font-bold">{category}</p>
                  <p className="text-lg">{description}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="flex flex-col items-end">
            {activeVideo && (
              <video
                key={activeVideo}
                ref={videoRef}
                autoPlay
                muted
                className="mb-6 max-w-full h-auto"
              >
                <source src={activeVideo} type="video/mp4" />
              </video>
            )}
            <div className="w-full flex justify-center items-center">
              <div className="flex xl:gap-10 gap-6 flex-wrap items-center">
                {activeItem.parts.map((part, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center cursor-pointer ${
                      activeVideo === part.videoSrc ? "" : "opacity-50"
                    }`}
                    onClick={() => setActiveVideo(part.videoSrc)}
                  >
                    <Image
                      quality={100}
                      src={part.src}
                      alt={part.alt}
                      width={200}
                      height={100}
                      className="object-contain w-15"
                    />
                    <p>{part.label}</p>
                  </div>
                ))}
              </div>
              <div
                className="absolute right-10 w-16 h-16 cursor-pointer"
                onClick={togglePlayPause}
              >
                <svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]">
                  <circle
                    cx="32"
                    cy="32"
                    r={RADIUS}
                    stroke="gray"
                    strokeWidth={STROKE}
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r={RADIUS}
                    stroke="white"
                    strokeWidth={STROKE}
                    fill="transparent"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </svg>
                <div className="w-full h-full flex items-center justify-center text-white text-xl relative z-10">
                  {isPlaying ? <Pause /> : <Play />}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* medium */}
        <div className="lg:hidden mt-10 flex flex-col justify-center gap-8">
          {items.map(({ category, description, parts }, index) => (
            <div key={index}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#00bfff]">
                  {category}
                </h3>
                <p className="text-lg">{description}</p>
              </div>
              <>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                >
                  {parts.map(({ alt, label, videoSrc }) => (
                    <SwiperSlide key={alt}>
                      <div className="flex flex-col items-center">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="mb-4 w-full max-w-3xl h-auto rounded-lg shadow-lg"
                        >
                          <source src={videoSrc} type="video/mp4" />
                        </video>
                        <p className="text-lg text-center">{label}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
