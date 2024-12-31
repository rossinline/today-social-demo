import { Star, Link, BadgeCheck } from "lucide-react";

interface WidgetProps {
  user: string;
  title: string;
  description: string;
  serviceName: string;
  staffName: string;
}

const ServiceWidget = ({ description, user, title, serviceName, staffName }: WidgetProps) => {
  return (
    <div className="bg-white/30 rounded-widget shadow-lg ring-1 ring-black/5">
      {/* Title Section */}
      <div className="mb-2 flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-t-widget px-4 py-1" aria-label="Service Widget" title="Service Widget">
        <h2 className="text-md font-semibold text-text1">Service Today - <i className="cursor-pointer hover:opacity-50">{user}</i></h2>
        <Star size={20} className="text-yellow-400" />
      </div>

      {/* Details Section */}
      <div className="flex flex-col space-y-4 p-4">
        {/* Description */}
        <div>
          <p className="text-md font-semibold text-text1">{title}</p>
          <p className="text-sm text-text1-200">
            {description}
          </p>
        </div>

        {/* Company Info */}
        <div className="flex items-center justify-between bg-white/30 p-2 rounded-lg shadow-md" aria-label="Service Details" title="Service Details">
          <div className="flex items-center space-x-2">
            <BadgeCheck
              size={20}
              className="text-yellow-600" // Approval Icon
            />
            <p className="text-xs text-text1">{serviceName}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-text1">{staffName}</p>
            {/* Link Icon */}
            <Link
              size={20}
              className="hover:cursor-pointer rounded-full hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300 hover:text-white"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWidget;
