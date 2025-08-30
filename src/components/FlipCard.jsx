import React, { useState } from "react";

const FlipCard = ({ front, back, dynamic = true, initiallyFlipped = false }) => {
  const [flipped, setFlipped] = useState(initiallyFlipped);
  const canFlip = dynamic;

  return (
    <div className="[perspective:1000px] w-full h-48" onClick={() => canFlip && setFlipped(f => !f)}>
      <div className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 backface-hidden rounded-2xl border border-indigo-300/40 bg-gradient-to-br from-indigo-900/40 to-violet-900/40 text-indigo-50 p-4 flex items-center justify-center shadow-lg">
          <div className="text-center">
            <p className="text-sm opacity-80">{canFlip ? "Tap To Flip" : "Static"}</p>
            <h4 className="mt-2 text-lg font-semibold">{front}</h4>
          </div>
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden rounded-2xl border border-violet-300/40 bg-gradient-to-br from-purple-700/50 to-blue-700/50 text-indigo-50 p-4 flex items-center justify-center shadow-xl">
          <p className="text-center leading-relaxed">{back}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;