import React, { useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const labels = {
    5: "Thanks Top-G! Really appreciate it!",
    4: "Great to know that you like it!",
    3: "Neutral? Playing safe huh!",
    2: "I will try to improve & thanks for the feedback!",
    1: "So you hate the website or hate me in general? :\"(",
  };

  return (
    <div className="mt-6">
      <div className="flex gap-2 text-3xl">
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} aria-label={`Rate ${n} star`} onClick={() => setRating(n)} className={`transition ${rating >= n ? 'scale-110' : ''}`}>
            <span className={`${rating >= n ? 'text-yellow-300' : 'text-white/40'}`}>★</span>
          </button>
        ))}
      </div>
      <p className="mt-3 text-indigo-50/90 min-h-6">{rating ? labels[rating] : 'Rate this site'}</p>
    </div>
  );
};

export default Ratings;