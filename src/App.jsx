import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10"></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
