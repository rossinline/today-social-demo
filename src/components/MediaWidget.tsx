import { useState, useRef, useEffect } from "react";
import { Images, Video, Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

type MediaType = string;

type MediaWidgetProps = {
  videos?: MediaType[];
  photos?: MediaType[];
  user: string;
};

const MediaWidget = ({ videos = [], photos = [], user }: MediaWidgetProps) => {
  const [activeTab, setActiveTab] = useState("all"); // Default to "All Media"
  const [isOverflowing, setIsOverflowing] = useState(false); // Tracks overflow status
  const scrollRef = useRef<HTMLDivElement>(null); // Ref for the media container

  const [popupMedia, setPopupMedia] = useState<MediaType | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Tracks if the video is playing

  const openPopup = (media: MediaType) => {
    setPopupMedia(media);
    // If it's a video, mark it as playing
    if (media.includes("mp4") || media.includes("youtube")) {
      setIsVideoPlaying(true);
    }
  };

  const closePopup = () => {
    setPopupMedia(null);
    setIsVideoPlaying(false); // Stop video when popup is closed
  };

  const mediaToDisplay =
    activeTab === "video"
      ? videos
      : activeTab === "photo"
        ? photos
        : [...videos, ...photos]; // Combine videos and photos for "All Media"

  const scrollMedia = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200, // Adjust scroll amount
        behavior: "smooth"
      });
    }
  };

  // Check for overflow on mount and resize
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        setIsOverflowing(scrollWidth > clientWidth); // Set overflow state
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [mediaToDisplay]);

  return (
    <div className="bg-gradient-to-br from-slate-50/30 to-slate-900/30 rounded-widget h-full flex flex-col justify-between">
      {/* Tab Buttons */}
      <div className="flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 ring-1 ring-black/5 rounded-t-widget px-4 py-1" aria-label="Media Widget" title="Media Widget">
        <h2 className="text-md font-semibold text-text1">Media Today - <i className="cursor-pointer hover:opacity-50">{user}</i></h2>
        <div className="flex space-x-2">
          <button
            className={`px-2 py-1 transition-transform ${activeTab === "all"
              ? "text-green-200 rounded-lg shadow-inner"
              : "text-text1 hover:animate-wiggle"
              }`}
            onClick={() => setActiveTab("all")}
            aria-label="All Media Button"
            title="All Media"
          >
            <Images size={20} className="block" />
          </button>
          <button
            className={`px-2 py-1 transition-transform ${activeTab === "video"
              ? "text-green-200 rounded-lg shadow-inner"
              : "text-text1 hover:animate-wiggle"
              }`}
            onClick={() => setActiveTab("video")}
            aria-label="Video Media Button"
            title="Videos"
          >
            <Video size={20} className="block" />
          </button>
          <button
            className={`px-2 py-1 transition-transform ${activeTab === "photo"
              ? "text-green-200 rounded-lg shadow-inner"
              : "text-text1 hover:animate-wiggle"
              }`}
            onClick={() => setActiveTab("photo")}
            aria-label="Image Media Button"
            title="Images"
          >
            <Camera size={20} className="block" />
          </button>
        </div>
      </div>

      {/* Media Container */}
      <div className="relative flex-grow flex items-end mt-2">
        {/* Navigation Arrows */}
        {isOverflowing && (
          <>
            <button
              className="absolute left-0 bottom-1/2 z-10 bg-white/50 p-2 rounded-r-widget text-text1 hover:bg-white/80"
              onClick={() => scrollMedia("left")}
              aria-label="Left Arrow Button"
              title="Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-0 bottom-1/2 z-10 bg-white/50 p-2 rounded-l-widget text-text1 hover:bg-white/80"
              onClick={() => scrollMedia("right")}
              aria-label="Right Arrow Button"
              title="Right"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Media Items */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4 px-4 w-full"
        >
          {mediaToDisplay.map((media: MediaType, index) => (
            <div
              key={index}
              className="relative w-36 h-36 cursor-pointer overflow-hidden group flex-shrink-0"
              onClick={() => openPopup(media)}
            >
              <div className="absolute inset-0 transform translate-y-1/2 group-hover:translate-y-0 transition-all duration-300">
                {media.includes("mp4") || media.includes("youtube") ? (
                  <video
                    src={media}
                    aria-label={`Video Thumbnail ${index + 1}`}
                    title="Video"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={media}
                    alt={`Photo ${index + 1}`}
                    title="Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              {/* Overlay Icon */}
              <div className="absolute bottom-2 right-2 text-black bg-white/50 rounded-lg p-2">
                {media.includes("mp4") ? (
                  <Video size={20} aria-label="Video Icon" />
                ) : (
                  <Camera size={20} aria-label="Camera Icon" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for Media */}
      {popupMedia && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closePopup} // Close the popup when clicking outside
        >
          <div
            className="bg-white/30 rounded-lg ring-1 ring-black/5 p-6 w-3/4 max-w-xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {popupMedia.includes("youtube") || popupMedia.includes("mp4") ? (
              <div className="relative w-full h-96 rounded-lg">
                <button
                  className="absolute top-2 right-2 text-black bg-white/50 rounded-lg ring-1 ring-black/5 hover:bg-red-600/30 p-2"
                  onClick={closePopup}
                >
                  <X size={20} />
                </button>
                {isVideoPlaying ? (
                  <iframe
                    src={popupMedia}
                    title="Popup Video"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center text-white">
                    <span className="text-xl">Click to Play</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-full">
                <button
                  className="absolute top-2 right-2 text-black bg-white/50 rounded-lg ring-1 ring-black/5 hover:bg-red-600/30 p-2"
                  onClick={closePopup}
                >
                  <X size={20} />
                </button>
                <img
                  src={popupMedia}
                  alt="Popup Image"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaWidget;
