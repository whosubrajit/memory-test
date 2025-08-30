import React, { useState } from "react";

const BlurStayBox = ({ title, text }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-2xl border border-purple-300/30 bg-purple-900/30 p-4 cursor-pointer" onClick={() => setRevealed(true)}>
      <h4 className="text-purple-100 font-semibold mb-2">{title}</h4>
      <p className={`transition ${revealed ? 'blur-0 opacity-100' : 'blur-sm opacity-80'}`}>{text}</p>
      {!revealed && <p className="mt-2 text-xs text-purple-200/70">Tap to unblur</p>}
    </div>
  );
};

export default BlurStayBox;