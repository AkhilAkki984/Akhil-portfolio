import React from "react";
import logo from "../assets/akhil.png"
const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src={logo} // 🔄 Your logo filename here
        alt="Akhill Logo"
        className="w-28 h-28 animate-pulse"
      />
      <p2>Wlcome to my portfolio</p2>
    </div>
  );
};

export default SplashScreen;
