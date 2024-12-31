import NavBar from "./NavBar";
import { useColor } from "../contexts/ColorContext";
import HomeHeader from "./HomeHeader";
import LessonWidget from "./LessonWidget";
import PeopleWidget from "./PeopleWidget";
import MediaWidget from "./MediaWidget";
import { useState } from "react";
import ServiceWidget from "./ServiceWidget";
import WhereWidget from "./WhereWidget";
import Footer from "./Footer";

const Home = () => {
  // Global background color
  const { color } = useColor();
  const [filter, setFilter] = useState<string>("all");

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

  // Media setup 1
  const videos: MediaType[] = [
    "./src/assets/videos/cliff-video.mp4",
    "./src/assets/videos/butterfly-video.mp4",
    "./src/assets/videos/sky-video.mp4"
  ];

  const photos: MediaType[] = [
    "/src/assets/images/geese.jpg",
    "/src/assets/images/road2.jpg",
    "/src/assets/images/cat.jpg",
    "/src/assets/images/vw-bus.jpg",
    "/src/assets/images/sunset.jpg",
    "/src/assets/images/trees.jpg"
  ];

  // Media setup 2
  const videos1: MediaType[] = [
    "./src/assets/videos/chicken-video.mp4",
  ];

  const photos1: MediaType[] = [
    "./src/assets/images/forest.jpg",
    "/src/assets/images/chicken.jpg",
    "/src/assets/images/iguana.jpg",
    "/src/assets/images/treetops.jpg"
  ];


  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className={`flex min-h-screen p-4 bg-gradient-to-br lg:gap-4  ${selectedColor}`}>
      {/* Left Navigation Bar */}
      <NavBar />
      {/* Main Content */}
      <div className="flex-grow">
        <HomeHeader onFilterChange={handleFilterChange} />

        {/* Widget Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          {filter === "all" || filter === "lessons" ? (
            <LessonWidget content="Change is inevitable, but growth is optional. Today, I learned the importance of adapting to new situations with an open mind. By focusing on solutions rather than problems, I was able to turn challenges into opportunities. This shift in mindset not only helped me achieve better results but also brought a sense of calm and clarity during stressful moments." user="John T" />
          ) : null}
          {filter === "all" || filter === "people" ? (
            <PeopleWidget person="Catherine Kim" content="A creative genius with a heart of gold." person1="Frank Turner" content1="Known for his humor and uplifting spirit." person2="Quinn Morgan" content2="An energetic team player with endless positivity." user="Janet W" />
          ) : null}
          {filter === "all" || filter === "services" ? (
            <ServiceWidget title="Great Fitness Training Session" description="Had an amazing session with my personal trainer today. We focused on strength training, and I feel stronger already! Emma was motivating and very knowledgeable." serviceName="PT Gym" staffName="Emma White" user="Jane L" />
          ) : null}
          {filter === "all" || filter === "where" ? (
            <WhereWidget title="Lakeside Retreat" description="Enjoyed a calm day by the water with activities like kayaking and fishing. A peaceful escape for those looking to relax and recharge." location="Lake Tahoe, California, USA" user="Jonas U" />
          ) : null}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-2 h-full space-y-4">
            {filter === "all" || filter === "media" ? (
              <MediaWidget videos={videos} photos={photos} user="Jade P" />
            ) : null}
          </div>
          {filter === "all" || filter === "where" ? (
            <WhereWidget title="A Peaceful Mountain Hike" description="A serene hike through lush forests, with breathtaking mountain views. Perfect for a morning getaway to reconnect with nature." location="Rocky Mountain National Park, Colorado, USA" user="Jason P" />
          ) : null}
          {filter === "all" || filter === "lessons" ? (
            <LessonWidget content="Consistency is the secret ingredient to success. Whether it's a fitness goal, learning a new skill, or building relationships, showing up every day creates compounding effects. Today, I realized that small, consistent efforts are far more impactful than occasional bursts of hard work. It’s not about perfection but about steady progress in the right direction." user="Jane W" />
          ) : null}
          {filter === "all" || filter === "where" ? (
            <WhereWidget title="City Walk in the Heart of Paris" description="Explored the iconic streets of Paris, strolling past historic landmarks like the Eiffel Tower and the Louvre, while enjoying the city's vibrant culture and chic cafés." location="Paris, France" user="Jess S" />
          ) : null}
          {filter === "all" || filter === "people" ? (
            <PeopleWidget person="Jane Doe" content="A great listener and a truly compassionate individual." person1="Samuel Evans" content1="A cheerful presence and a source of endless motivation." person2="Noah Scott" content2="A dedicated volunteer who makes the community a better place." user="Jesse S" />
          ) : null}
          {filter === "all" || filter === "services" ? (
            <ServiceWidget title="Superb Interior Painting" description="The interior of my house looks brand new after the painting service. They were efficient, and the work quality was outstanding. Lisa provided fantastic advice and was incredibly professional." serviceName="Interior Paints" staffName="Lisa Brown" user="Jack T" />
          ) : null}
          {filter === "all" || filter === "people" ? (
            <PeopleWidget person="Harry Parker" content="A curious learner with a knack for solving problems." person1="Karen Patel" content1="A thoughtful advisor with a wealth of knowledge." person2="Lisa Brown" content2="An inspiring role model who leads with kindness and integrity." user="Jordan Q" />
          ) : null}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-2 h-full space-y-4">
            {filter === "all" || filter === "media" ? (
              <MediaWidget videos={videos1} photos={photos1} user="Jake A" />
            ) : null}
          </div>
          {filter === "all" || filter === "lessons" ? (
            <LessonWidget content="Learned the importance of persistence today." user="Joe C" />
          ) : null}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
