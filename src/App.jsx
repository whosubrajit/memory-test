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
      <AnimatedBackdrop />
      
      <header className="relative z-10 pt-20 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
          Memory in the Age of AI
        </h1>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
          Explore how memory works, how AI is changing it, and test your own memory with interactive games
        </p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        {/* Memory Basics Section */}
        <section id="basics" className="mb-20">
          <h2 className="text-3xl font-bold text-indigo-100 mb-8">How Memory Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FlipCard
              front="Sensory Memory"
              back="Lasts milliseconds to seconds. Your initial perception of the world through senses. Most information is lost unless attended to."
            />
            <FlipCard
              front="Short-term Memory"
              back="Holds about 7 items for 20-30 seconds. Like a mental notepad. Requires rehearsal to transfer to long-term memory."
            />
            <FlipCard
              front="Long-term Memory"
              back="Can store vast amounts of information indefinitely. Includes both explicit (facts) and implicit (skills) memories."
            />
            <FlipCard
              front="Memory Consolidation"
              back="The process of transferring short-term memories to long-term storage, often during sleep through hippocampal replay."
            />
          </div>
        </section>

        {/* AI Impact Section */}
        <section id="ai-impact" className="mb-20">
          <h2 className="text-3xl font-bold text-indigo-100 mb-8">AI's Impact on Memory</h2>
          <div className="space-y-4">
            <RevealBox
              title="Cognitive Offloading"
              text="We're increasingly relying on digital devices to store information we'd normally memorize, like phone numbers or directions."
            />
            <RevealBox
              title="Changed Learning Patterns"
              text="With instant access to information, we're becoming better at knowing where to find information rather than memorizing it."
            />
            <RevealBox
              title="Enhanced Memory Tools"
              text="AI-powered apps can create optimal spaced repetition schedules and personalized learning paths for better retention."
            />
            <RevealBox
              title="The Google Effect"
              text="The tendency to forget information that can be easily found online, remembering instead where to find it."
            />
          </div>
        </section>

        {/* Memory Tips Section */}
        <section id="tips" className="mb-20">
          <h2 className="text-3xl font-bold text-indigo-100 mb-8">Memory Enhancement Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BlurStayBox
              title="Spaced Repetition"
              text="Review information at increasing intervals to combat the forgetting curve. Apps like Anki use this principle."
            />
            <BlurStayBox
              title="Memory Palace"
              text="Associate information with familiar locations in your mind. Ancient technique, incredibly effective for ordered lists."
            />
            <BlurStayBox
              title="Adequate Sleep"
              text="Critical for memory consolidation. During deep sleep, your brain transfers memories from hippocampus to cortex."
            />
            <BlurStayBox
              title="Chunking"
              text="Group related information together. Phone numbers are chunked (555-867-5309) because 10 separate digits are hard to remember."
            />
          </div>
        </section>

        {/* Interactive Games Section */}
        <section id="games" className="mb-20">
          <h2 className="text-3xl font-bold text-indigo-100 mb-8">Test Your Memory</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-indigo-200 mb-4">Memory Match Game</h3>
            <MemoryGame />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-200 mb-4">Simon Says</h3>
            <SimonSays />
          </div>
        </section>

        {/* Rating Section */}
        <section id="rating">
          <h2 className="text-3xl font-bold text-indigo-100 mb-8">How was your experience?</h2>
          <Ratings />
        </section>
      </main>

      <footer className="relative z-10 text-center py-8 text-indigo-200/70">
        <p>© 2024 Memory & AI Explorer. Created to help understand human memory in the digital age.</p>
      </footer>
    </div>
  );
}
