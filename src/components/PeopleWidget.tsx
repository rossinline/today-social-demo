import { HeartHandshake, User } from "lucide-react";

interface WidgetProps {
  user: string;
  content: string;
  content1: string;
  content2: string;
  person: string;
  person1: string;
  person2: string;

}

const PeopleWidget = ({ content, content1, content2, person, person1, person2, user }: WidgetProps) => {
  return (
    <div className="bg-white/30 rounded-widget shadow-lg ring-1 ring-black/5">
      {/* Title Section */}
      <div className="flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-t-widget px-4 py-1 mb-2" aria-label="People Widget" title="People Widget">
        <h2 className="text-md font-semibold text-text1">People Today - <i className="cursor-pointer hover:opacity-50">{user}</i></h2>
        <HeartHandshake size={20} className="text-blue-500" />
      </div>

      {/* Details Section */}
      <div className="flex flex-col space-y-4 p-4">
        {/* List of Friends */}
        <div className="space-y-2">
          {/* Person Widget as a Button */}
          <button className="group flex items-center justify-between w-full bg-gradient-to-br from-white/50 to-white/20 p-2 rounded-lg shadow-md hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-300 transition-all duration-300" aria-label="Person Details" title="Person Details">
            <div className="flex items-center space-x-2">
              <User size={20} className="text-blue-500" />
              <p className="text-xs text-text1">{person}</p>
            </div>
            <p className="text-xs text-text1-800 italic">{content}</p>
          </button>

          <button className="group flex items-center justify-between w-full bg-gradient-to-br from-white/50 to-white/20 p-2 rounded-lg shadow-md hover:bg-gradient-to-br hover:from-pink-100 hover:to-pink-300 transition-all duration-300" aria-label="Person Details" title="Person Details">
            <div className="flex items-center space-x-2">
              <User size={20} className="text-blue-500" />
              <p className="text-xs text-text1">{person1}</p>
            </div>
            <p className="text-xs text-text1-800 italic">{content1}</p>
          </button>

          <button className="group flex items-center justify-between w-full bg-gradient-to-br from-white/50 to-white/20 p-2 rounded-lg shadow-md hover:bg-gradient-to-br hover:from-stone-100 hover:to-stone-300 transition-all duration-300" aria-label="Person Details" title="Person Details">
            <div className="flex items-center space-x-2">
              <User size={20} className="text-blue-500" />
              <p className="text-xs text-text1">{person2}</p>
            </div>
            <p className="text-xs text-text1-800 italic">{content2}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleWidget;
