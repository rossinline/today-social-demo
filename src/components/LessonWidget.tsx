import { Lightbulb } from "lucide-react";

interface WidgetProps {
  user: string;
  content: string;
}

const LessonWidget = ({ content, user }: WidgetProps) => {
  return (
    <div className="rounded-widget ring-1 ring-black/5 bg-gradient-to-br from-sky-50/20 to-yellow-100/80">
      {/* Title Section */}
      <div className="flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-t-widget px-4 py-1 mb-2" aria-label="Lesson Widget" title="Lesson Widget">
      <div className="flex items-center gap-2">
        <h2 className="text-md font-semibold text-text1 ">Lesson Today - </h2>
        <p className="cursor-pointer hover:opacity-50">{user}</p>
        </div>
        <Lightbulb size={20} className="text-white" aria-label="Bulb (Lesson) Icon" />
      </div>

      {/* Message Section */}
      <div>
        <p className="text-sm text-text1 p-4">{content}</p>
      </div>
    </div>
  );
};

export default LessonWidget;
