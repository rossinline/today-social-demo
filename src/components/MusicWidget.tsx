import { Music } from "lucide-react";

const MusicWidget = () => {
  return (
    <div className="bg-gradient-to-br from-lime-300 to-gray-400 pb-4 rounded-widget shadow-lg h-full">
      {/* Music Today Section */}
      <div className="flex items-center justify-between mb-4 bg-white/30 shadow-lg ring-1 ring-black/5 rounded-t-widget px-4 py-1" aria-label="Music Details" title="Music Details">
        <h2 className="text-md font-semibold text-text1">Music Today</h2>
        <Music size={20} color="#6c757d" />
      </div>

      {/* Album Cover and Song Information */}
      <div className="flex items-center space-x-4 px-4">
        {/* Album Cover */}
        <img
          src="/images/EdSheeran-AlbumCover.png"
          alt="Album Cover"
          className="w-15 h-10 object-cover rounded-lg shadow-lg ring-white/30 ring-8"
        />

        {/* Song and Artist Information */}
        <div>
          <p className="text-md font-semibold text-white">Photograph</p>
          <p className="text-sm text-gray-200">Ed Sheeran</p>
        </div>
      </div>
    </div>
  );
};

export default MusicWidget;
