import { AlertCircle, BookMarked } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate(); // Hook to navigate between pages

    const handleStartClick = () => {
        navigate("/form"); // Navigate to the Form Page
    };

    return (
        <div className="">
            <div className="h-screen flex justify-center items-center flex-col space-y-8 bg-gradient-to-br from-slate-50 to-gray-500">
                <div className="w-20 h-20  hover:cursor-pointer bg-white/30 rounded-widget ring-1 ring-black/5 mb-2 flex items-center justify-center shadow-lg">
                    {/* Logo Placeholder */}
                    <span className="text-gray1 font-bold text-xl">Today</span>
                </div>
                <h1 className="text-4xl font-bold text-center">
                    Welcome to Your Today!
                </h1>
                <button
                    onClick={handleStartClick}
                    className="flex items-center justify-between px-6 py-3 bg-gradient-to-br from-slate-50 to-gray-500/30 shadow-lg ring-1 ring-black/5 rounded-lg text-lg hover:bg-hovergray hover:ring-2 hover:ring-hovergray transition duration-300 animate-bounce hover:animate-none group"
                >
                    Start your Today <BookMarked size={20} className="text-gray1 ml-3 group-hover:text-white transition duration-300" />
                </button>

                <div className="flex items-center justify-between bg-white ring-black/5 px-4 py-1">
                    <p className="text-md font-semibold text-red-700 mx-10">NOTE: This website is for Demonstrational purposes only</p>
                    <AlertCircle size={20} className="text-red-700" />
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
