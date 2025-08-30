import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";

const SimonSays = () => {
  const colors = [
    { key: 'A', base: 'bg-indigo-600', pop: 'ring-8 ring-indigo-300' },
    { key: 'B', base: 'bg-purple-600', pop: 'ring-8 ring-purple-300' },
    { key: 'C', base: 'bg-blue-600', pop: 'ring-8 ring-blue-300' },
    { key: 'D', base: 'bg-fuchsia-600', pop: 'ring-8 ring-fuchsia-300' },
  ];

  const [sequence, setSequence] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [active, setActive] = useState(-1);
  const [round, setRound] = useState(0);
  const [ended, setEnded] = useState(false);

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const start = async () => {
    setSequence([]);
    setUserIndex(0);
    setRound(0);
    setEnded(false);
    await nextRound([]);
  };

  const nextRound = async (prevSeq) => {
    const next = [...prevSeq, Math.floor(Math.random() * 4)];
    setSequence(next);
    setUserIndex(0);
    setRound(next.length);
    setIsShowing(true);
    for (let i = 0; i < next.length; i++) {
      setActive(next[i]);
      await sleep(500);
      setActive(-1);
      await sleep(160);
    }
    setIsShowing(false);
  };

  const press = async (idx) => {
    if (isShowing || ended) return;
    setActive(idx);
    await sleep(180);
    setActive(-1);
    const expected = sequence[userIndex];
    if (idx === expected) {
      const nextIdx = userIndex + 1;
      if (nextIdx >= sequence.length) {
        await sleep(300);
        await nextRound(sequence);
      } else {
        setUserIndex(nextIdx);
      }
    } else {
      setEnded(true);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-4 text-indigo-100">
        <div className="rounded-xl bg-indigo-900/40 px-3 py-2">Rounds passed: <span className="font-semibold">{Math.max(0, round - 1)}</span></div>
        <button onClick={start} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow">
          <RefreshCcw className="w-4 h-4" /> Replay
        </button>
      </div>
      {ended && (
        <div className="mb-4 rounded-xl bg-rose-600/20 border border-rose-400/40 text-rose-100 p-3">
          ❌ Game over. You passed <b>{Math.max(0, round - 1)}</b> rounds.
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 max-w-md">
        {colors.map((c, i) => (
          <button key={c.key} onClick={() => press(i)} className={`h-28 rounded-2xl ${c.base} ${active === i ? 'scale-105 ' + c.pop : 'ring-2 ring-white/10'} transition-transform`} />
        ))}
      </div>
    </div>
  );
};

export default SimonSays;