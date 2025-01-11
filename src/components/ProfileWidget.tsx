import { CirclePlus } from "lucide-react";
import MusicWidget from "./MusicWidget";

const ProfileWidget = () => {
  return (
    <div className="bg-white/30 rounded-widget ring-1 ring-black/5 p-4 flex flex-col items-center space-y-4 h-full">
      {/* Profile Picture */}
      <img
        src="/today-social-demo/images/profile-photo.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray1"
      />

      {/* Follow Button */}
      <button className="flex items-center justify-center over:cursor-pointer rounded-full ring-1 ring-black/5 hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300 hover:text-white" aria-label="Follow Profile" title="Follow Profile">
        <CirclePlus size={25} />
      </button>

      {/* Profile Name */}
      <h2 className="text-xl font-semibold">John Doe</h2>

      {/* Profile Description */}
      <p className="text-sm text-gray-600 text-center">
        Photographer. Passionate about technology and art.
      </p>

      {/* Followers Info */}
      <div className="mt-4 text-xs text-gray-600">
        <p>Followers: 150</p>
      </div>

      {/* MusicWidget at the Bottom */}
      <div className="mt-4 w-full">
        <MusicWidget />
      </div>
    </div>
  );
};

export default ProfileWidget;
