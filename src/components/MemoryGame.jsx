import React, { useState, useEffect } from "react";
import { RefreshCcw } from "lucide-react";

const EMOJIS = [
  '🧠','💡','🤖','📱','⌛','🧩','🔒','📝','📚','🌙','🎯','🛰️','🔔','📈','🔍',
  '🧠','💡','🤖','📱','⌛','🧩','🔒','📝','📚','🌙','🎯','🛰️','🔔','📈','🔍',
];

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MemoryGame = () => {
  const [deck, setDeck] = useState(() =>
    shuffle(EMOJIS).map((icon, idx) => ({
      id: `${idx}-${icon}-${Math.random().toString(36).slice(2)}`,
      icon,
      matched: false,
    }))
  );
  const [flippedIdxs, setFlippedIdxs] = useState([]);
  const [turns, setTurns] = useState(0);
  const [misses, setMisses] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (flippedIdxs.length === 2) {
      setLock(true);
      const [a, b] = flippedIdxs;
      setTimeout(() => {
        setDeck((prev) => {
          const copy = prev.slice();
          if (copy[a].icon === copy[b].icon) {
            copy[a].matched = true;
            copy[b].matched = true;
          } else {
            setMisses((m) => m + 1);
          }
          return copy;
        });
        setFlippedIdxs([]);
        setTurns((t) => t + 1);
        setLock(false);
      }, 700);
    }
  }, [flippedIdxs]);

  const handleFlip = (i) => {
    if (lock || flippedIdxs.includes(i) || deck[i].matched || flippedIdxs.length === 2) return;
    setFlippedIdxs((prev) => [...prev, i]);
  };

  const reset = () => {
    setDeck(
      shuffle(EMOJIS).map((icon, idx) => ({
        id: `${idx}-${icon}-${Math.random().toString(36).slice(2)}`,
        icon,
        matched: false,
      }))
    );
    setFlippedIdxs([]);
    setTurns(0);
    setMisses(0);
    setLock(false);
  };

  const allMatched = deck.every((c) => c.matched);

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-4 text-indigo-100">
        <div className="rounded-xl bg-indigo-900/40 px-3 py-2">Turns: <span className="font-semibold">{turns}</span></div>
        <div className="rounded-xl bg-indigo-900/40 px-3 py-2">Misses: <span className="font-semibold">{misses}</span></div>
        <button onClick={reset} className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow">
          <RefreshCcw className="w-4 h-4" /> Replay
        </button>
      </div>

      {allMatched && (
        <div className="mb-4 rounded-xl bg-emerald-600/20 border border-emerald-400/40 text-emerald-100 p-3">
          🎉 Finished in <b>{turns}</b> turns with <b>{misses}</b> misses.
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {deck.map((card, i) => {
          const isUp = card.matched || flippedIdxs.includes(i);
          return (
            <div key={card.id} onClick={() => handleFlip(i)} className="[perspective:900px] h-24 select-none">
              <div className={`relative w-full h-full duration-300 [transform-style:preserve-3d] ${isUp ? '[transform:rotateY(180deg)]' : ''}`}>
                <div className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-indigo-700 to-purple-700 border border-indigo-300/40 flex items-center justify-center shadow">
                  <span className="text-indigo-100 opacity-90">🂠</span>
                </div>
                <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden rounded-xl bg-indigo-900/40 border border-violet-300/40 flex items-center justify-center text-3xl">
                  <span>{card.icon}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;