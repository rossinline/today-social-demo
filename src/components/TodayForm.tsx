import { BookOpen, FileQuestion } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";
import Footer from "./Footer";

const TodayForm = () => {

    const navigate = useNavigate();  // Initialize the navigate function

    // Handle the button click to navigate
    const handleNavigateToHome = () => {
      navigate("/home");
    };

    const { color, setColor } = useColor(); // Access global color and setter

  // Initializing formData with all widget data
  const [formData, setFormData] = useState({
    name: "",
    location: "", // WhereWidget
    service: "", // ServiceWidget
    music: "", // MusicWidget
    lesson: "", // LessonWidget
    people: "", // PeopleWidget
    media: "", // MediaWidget (image URL)
    color: "", // Color selection
  });


  // Form submit handler for background color
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "color") {
      setColor(value); // Update global color
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Define global background color gradients for the selection
  const colorGradients = {
    red: "from-slate-50 to-red-500",
    green: "from-slate-50 to-green-500",
    blue: "from-slate-50 to-blue-500",
    purple: "from-slate-50 to-indigo-500",
    pink: "from-slate-50 to-red-300",
    orange: "from-slate-50 to-orange-500"
  };

  // Apply selected color gradient, or default to gray if no color selected
  const selectedColor = color ? colorGradients[color as keyof typeof colorGradients] : "from-slate-50 to-gray-500";

  return (
    <div className={`min-h-screen p-4 lg:px-20 flex justify-center items-center flex-col space-y-6 bg-gradient-to-br ${selectedColor}`}>
      {/* Logo */}
      <div className="w-20 h-20  hover:cursor-pointer bg-white/30 rounded-widget ring-1 ring-black/5 mb-2 flex items-center justify-center shadow-lg">
        <span className="text-gray1 font-bold text-xl">Today</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white/30 rounded-widget shadow-lg ring-1 ring-black/5">
      <div className="mb-2 flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-t-widget px-4 py-1">
      <h2 className="text-md font-semibold text-red-800">Visiters Read me</h2>
      <FileQuestion size={20} className="text-red-800" />
        
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-md font-semibold text-text1">This is a demo Social Media Website</h2>
          <p className="text-sm text-text1">
            This is a demo website for a social media concept called Today Social, A positive social media journaling platform allowing people to spread positive aspects of thier day with the public, or keep them private on their account area.
          </p>
          <p className="text-sm text-text1">
            This is only using Frontend technologies and code and is for display and visual demonstration only, no backend or database aspects are implimented <i>as of 2024</i>.
          </p>
          <p className="text-sm text-text1 font-semibold">
            Please feel free to browse through the demo pages, Thankyou for your time!
          </p>
          </div>
          {/* Color Selection (Favorite Color) */}
          <div className="my-4 p-4 space-y-2">
          <label htmlFor="color" className="block text-md font-semibold">
          What's your favorite color preset for this demo?
        </label>
        <select
          id="color"
          name="color"
          value={color}
          onChange={handleChange}
          className="w-full p-1 border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-lime-500/20"
        >
          <option value="">Default (Gray)</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
        </select>

            <button
        type="button"
        onClick={handleNavigateToHome}
        className="w-full px-6 py-2 bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-lg text-lg hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300"
      >
        Go to Today Home
      </button>
          
        </div>

      </div>
    
      <div className="bg-white/30 rounded-widget shadow-lg ring-1 ring-black/5">
        <div className="mb-2 flex items-center justify-between bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-t-widget px-4 py-1">
          <h2 className="text-lg font-semibold text-text1">Today's Journal - <i className="text-sm">Demo read only</i></h2>
          <BookOpen size={20} className="text-gray1" />
        </div>

        <form className="w-auto space-y-4 p-4 opacity-50">

          {/* WhereWidget (Location) placeholder*/}
          <div>
            <label htmlFor="location" className="block text-md font-semibold">Where have you been?</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-red-500/20"
              placeholder="Enter location"
              readOnly // Locked input
            />
          </div>

          {/* ServiceWidget (Service) placeholder*/}
          <div>
            <label htmlFor="service" className="block text-md font-semibold">What services would you recommend?</label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-orange-500/20"
              placeholder="Enter service"
              readOnly // Locked input
            />
          </div>

          {/* MusicWidget (Music) placeholder*/}
          <div>
            <label htmlFor="music" className="block text-md font-semibold">What music did you listen to?</label>
            <input
              type="text"
              id="music"
              name="music"
              value={formData.music}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-green-500/20"
              placeholder="Enter music"
              readOnly // Locked input
            />
          </div>

          {/* LessonWidget (Lesson) placeholder*/}
          <div>
            <label htmlFor="lesson" className="block text-md font-semibold">What lesson have you learnt?</label>
            <input
              type="text"
              id="lesson"
              name="lesson"
              value={formData.lesson}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-yellow-500/20"
              placeholder="Enter lesson"
              readOnly // Locked input
            />
          </div>

          {/* PeopleWidget (People) placeholder*/}
          <div>
            <label htmlFor="people" className="block text-md font-semibold">Who have you seen?</label>
            <input
              type="text"
              id="people"
              name="people"
              value={formData.people}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-blue-500/20"
              placeholder="Enter people"
              readOnly // Locked input
            />
          </div>

          {/* MediaWidget (Media) placeholder*/}
          <div>
            <label htmlFor="media" className="block text-md font-semibold">Media</label>
            <select
              id="media"
              name="media"
              value={formData.media}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray1 rounded-lg bg-gradient-to-br from-slate-50/90 to-lime-500/20"
              disabled // Locked select dropdown
            >
              <option className="bg-lime-500/30" value="">Select media</option>
              <option value="image1">Image 1</option>
              <option value="image2">Image 2</option>
              <option value="image3">Image 3</option>
              <option value="image4">Image 4</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-lg text-lg hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300"
            disabled >
            Submit Today
          </button>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default TodayForm;
