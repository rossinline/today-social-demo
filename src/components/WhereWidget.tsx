import { MapPin, TreeDeciduous, Map } from "lucide-react";

interface WidgetProps {
  user: string;
  title: string;
  description: string;
  location: string;
}

const WhereWidget = ({ description, user, title, location }: WidgetProps) => {

  return (
    <div className="bg-white/30 rounded-widget ring-1 ring-black/5" aria-label="Where Widget" title="Where Widget">
      {/* Title Section */}
      <div className="flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 ring-1 ring-black/5 rounded-t-widget px-4 py-1 mb-2">
        <h2 className="text-md font-semibold text-text1">Where Today - <i className="cursor-pointer hover:opacity-50">{user}</i></h2>
        <MapPin size={20} className="text-red-500" />
      </div>

      {/* Details Section */}
      <div className="flex flex-col space-y-4 p-4">
        {/* Description */}
        <div>
          <p className="text-md font-semibold text-text1">{title}</p>
          <p className="text-sm text-text1">
            {description}
          </p>
        </div>

        {/* External Location Info with Map Icon */}
        <div className="flex items-center justify-between bg-white/30 p-2 rounded-lg shadow-md" aria-label="Location Details" title="Location Details">
          <div className="flex items-center space-x-2">
            <TreeDeciduous size={20} className="text-green-500" />
            <p className="text-xs text-text1-800">{location}</p>
          </div>
          {/* Map Icon */}
          <Map
            size={20}
            className="hover:cursor-pointer rounded-full hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereWidget;
