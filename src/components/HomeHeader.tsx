import { GalleryVerticalEnd, HeartHandshake, Images, Lightbulb, MapPin, RefreshCw, Star } from "lucide-react";

const HomeHeader = ({ onFilterChange }: { onFilterChange: (filter: string) => void }) => {
  return (
    <div className="flex items-center justify-between space-x-4 h-20 p-4 bg-white/30 rounded-widget ring-1 ring-black/5 shadow-lg ">
      {/* Filter buttons area */}
      <div className="flex space-x-4 justify-center flex-grow">
        <button
          onClick={() => onFilterChange("all")}
          aria-label="Filter All Button"
          title="Filter: All"
          className="flex items-center justify-center lg:w-auto w-10 h-10 sm:w-12 sm:h-12 lg:px-4 px-1 rounded-[12px] sm:rounded-[15px] text-sm font-semibold border border-gray1 hover:bg-gradient-to-br hover:from-slate-50 hover:to-gray-500/50 transition-all duration-300 group"
        >
          <p className="hidden lg:block">All</p>
          <GalleryVerticalEnd size={20} className="text-gray1 group-hover:text-white transition duration-300 lg:ml-2" />
        </button>
        <button
          onClick={() => onFilterChange("lessons")}
          aria-label="Filter Lessons Button"
          title="Filter: Lessons"
          className="flex items-center justify-center lg:w-auto w-10 h-10 sm:w-12 sm:h-12 lg:px-4 px-1 rounded-[12px] sm:rounded-[15px] text-sm font-semibold border border-gray1 hover:bg-gradient-to-br hover:from-white/50 hover:to-yellow-300/50 transition-all duration-300 group"
        >
          <p className="hidden lg:block">Lessons</p>
          <Lightbulb size={20} className="text-gray1 group-hover:text-white transition duration-300 lg:ml-2" />
        </button>
        <button
          onClick={() => onFilterChange("people")}
          aria-label="Filter People Button"
          title="Filter: People"
          className="flex items-center justify-center lg:w-auto w-10 h-10 sm:w-12 sm:h-12 lg:px-4 px-1 rounded-[12px] sm:rounded-[15px] text-sm font-semibold border border-gray1 hover:bg-gradient-to-br hover:from-white/50 hover:to-blue-300/50 transition-all duration-300 group">
          <p className="hidden lg:block">People</p>
          <HeartHandshake size={20} className="text-gray1 group-hover:text-white transition duration-300 lg:ml-2" />
        </button>
        <button
          onClick={() => onFilterChange("media")}
          aria-label="Filter Media Button"
          title="Filter: Media"
          className="flex items-center justify-center lg:w-auto w-10 h-10 sm:w-12 sm:h-12 lg:px-4 px-1 rounded-[12px] sm:rounded-[15px] text-sm font-semibold border border-gray1 hover:bg-gradient-to-br hover:from-white/50 hover:to-green-200/50 transition-all duration-300 group">
          <p className="hidden lg:block">Media</p>
          <Images size={20} className="text-gray1 group-hover:text-white transition duration-300 lg:ml-2" />
        </button>
        <button
          onClick={() => onFilterChange("services")}
          aria-label="Filter Services Button"
          title="Filter: Services"
          className="flex items-center justify-center lg:w-auto w-10 h-10 sm:w-12 sm:h-12 lg:px-4 px-1 rounded-[12px] sm:rounded-[15px] text-sm font-semibold border border-gray1 hover:bg-gradient-to-br hover:from-white/50 hover:to-yellow-400/50 transition-all duration-300 group">
          <p className="hidden lg:block">Services</p>
          <Star size={20} className="text-gray1 group-hover:text-white transition duration-300 lg:ml-2" />
        </button>
        <button
          onClick={() => onFilterChange("where")}
          aria-label="Filter Where Button"
          title="Filter: Where"
          className="flex items-center justify-center lg:w-auto w-10 h-10 sm:w-12 sm:h-12 lg:px-4 px-1 rounded-[12px] sm:rounded-[15px] text-sm font-semibold border border-gray1 hover:bg-gradient-to-br hover:from-white/50 hover:to-red-500/50 transition-all duration-300 group">
          <p className="hidden lg:block">Where</p>
          <MapPin size={20} className="text-gray1 group-hover:text-white transition duration-300 lg:ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
