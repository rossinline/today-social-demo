import { PencilLine } from "lucide-react";

const ProfilePersonalHeader = () => {

  return (
<div className="flex flex-col space-y-4 h-20 w-auto p-4 bg-white/30 rounded-widget ring-1 ring-black/5 shadow-lg">
  {/* Description */}
  <div className="flex items-center justify-between h-full">
    <div className="flex flex-col">
      <p className="text-md font-semibold text-text1">Welcome back John!</p>
      <p className="text-sm text-text1 hidden sm:block">Edit your Profile Header by clicking the pencil -</p>
    </div>
    {/* Icon */}
    <button className="flex items-center justify-center rounded-full hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300 hover:text-white">
      <PencilLine size={25} aria-label="Edit Today"/>
    </button>
  </div>
</div>


  );
};

export default ProfilePersonalHeader;
