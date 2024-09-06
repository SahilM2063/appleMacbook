/* eslint-disable no-unused-vars */
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import MacContainer from "./MacContainer";

const App = () => {
  // State for toggling OrbitControls
  const [orbitEnabled, setOrbitEnabled] = useState(false);

  // Event listener for key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "c") {
        setOrbitEnabled((prev) => !prev); // Toggle OrbitControls on 'C' press
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener when component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="w-full h-screen font-helvetica">
      <p className="text-sm text-white absolute bottom-0 right-10">
        Press C key on keyboard for activate / deactivate controls
      </p>
      {/* Navbar */}
      <div className="navbar flex gap-10 absolute top-0 py-3 left-1/2 -translate-x-1/2">
        <a href="#" className="text-white font-[400] text-sm">
          iphone
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          ipad
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          services
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          ios
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          mac
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          products
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          airpods
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          vision pro
        </a>
        <a href="#" className="text-white font-[400] text-sm">
          watch
        </a>
      </div>

      {/* Main Content */}
      <div className="absolute top-32 left-1/2 text-white -translate-x-1/2 flex flex-col items-center">
        <h3 className="masked text-5xl font-[700] tracking-tighter">
          macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="w-3/4 text-center">We can do this all day.</p>
      </div>

      {/* Canvas for 3D rendering */}
      <Canvas camera={{ fov: 12, position: [0, -10, 238] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        {orbitEnabled && <OrbitControls />}
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
