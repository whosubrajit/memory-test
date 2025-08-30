import React from "react";
import useSmoothScroll from "./hooks/useSmoothScroll";
import AnimatedBackdrop from "./components/AnimatedBackdrop";
import FlipCard from "./components/FlipCard";
import RevealBox from "./components/RevealBox";
import BlurStayBox from "./components/BlurStayBox";
import MemoryGame from "./components/MemoryGame";
import SimonSays from "./components/SimonSays";
import Ratings from "./components/Ratings";

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950 text-indigo-50">
      {/* Your full layout goes here, exactly as you wrote it */}
    </div>
  );
}