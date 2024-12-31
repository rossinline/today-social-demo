import NavBar from "./NavBar";
import WhereWidget from "./WhereWidget";
import PeopleWidget from "./PeopleWidget";
import ProfileWidget from "./ProfileWidget";
import MediaWidget from "./MediaWidget";
import LessonWidget from "./LessonWidget";
import ServiceWidget from "./ServiceWidget";
import ProfilePersonalHeader from "./ProfilePersonalHeader";
import { useColor } from "../contexts/ColorContext";
import Footer from "./Footer";

const Profile = () => {

  //Global background color
  const { color } = useColor();

  const colorGradients = {
    red: "from-slate-50 to-red-500",
    green: "from-slate-50 to-green-500",
    blue: "from-slate-50 to-blue-500",
    purple: "from-slate-50 to-indigo-500",
    pink: "from-slate-50 to-red-300",
    orange: "from-slate-50 to-orange-500",
  };

  const selectedColor = color ? colorGradients[color as keyof typeof colorGradients] : "from-slate-50 to-gray-500";

  type MediaType = string;

  //media setup 1
  const videos: MediaType[] = [
    "./public/videos/bird-video.mp4",
  ];

  const photos: MediaType[] = [
    "./public/images/camera.jpg",
    "./public/images/explore.jpg",
    "./public/images/kitesurfing.jpg",
    "./public/images/road.jpg"
  ];

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-br ${selectedColor}`}>
      {/* Content Area */}
      <div className="flex flex-1 p-4 lg:gap-4">
        {/* Left Navigation Bar */}

          <NavBar />

  
        {/* Main Content */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="col-span-1 lg:col-span-2 xl:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-3 h-full space-y-4">
                  <ProfilePersonalHeader />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-2 h-full space-y-4">
                  <MediaWidget videos={videos} photos={photos} user="you" />
                </div>
                <WhereWidget title="City Skyline Stroll" description="A relaxing walk through the heart of the city, with a stunning view of the skyline and urban parks. Ideal for an afternoon of exploration." location="Central Park, New York City, USA" user="you"/>
              <PeopleWidget person="Henry Evans" content="A fantastic storyteller who lights up every gathering." person1="Sarah Carter" content1="A skilled musician and an amazing teacher." person2="Rachel Green" content2="A creative chef who shares her culinary secrets." user="you"/>
              <LessonWidget content="Kindness isn’t a weakness—it’s a superpower. Choosing empathy, even in difficult situations, strengthens our relationships and reminds us of the humanity we all share." user="you"/>
              <ServiceWidget title="Perfect Lawn Care" description="The lawn care service was impeccable! They arrived on time, mowed the lawn perfectly, and even trimmed the edges beautifully. Tom was very thorough and friendly." serviceName="Lawn Care" staffName="Tom Harris" user="you"/>
              </div>
            </div>
  
            {/* Profile Widget (Fixed on the right side) */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1 h-full space-y-4">
              <ProfileWidget />
            </div>
          </div>
        </div>
      </div>
  
      {/* Footer */}
      <Footer />
    </div>
  );
  
};

export default Profile;
