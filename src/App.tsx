import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import TodayForm from "./components/TodayForm";
import Home from "./components/Home"
import Profile from "./components/Profile";
import { ColorProvider } from "./contexts/ColorContext";

const App = () => {
  return (
    <ColorProvider>
    <Router basename="/today-social-demo">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<TodayForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </ColorProvider>
  );
};

export default App;
