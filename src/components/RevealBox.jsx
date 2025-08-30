import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const RevealBox = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-indigo-300/40 bg-indigo-900/30 hover:bg-indigo-900/40 transition p-4">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between">
        <h4 className="text-indigo-100 font-semibold">{title}</h4>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 text-indigo-50/90"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RevealBox;