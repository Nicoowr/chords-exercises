import React, { useState } from "react";
import { Title } from "./Title";
import { ChordsDegreesExercise } from "./ChordsDegreesExercise";
import { IoMdMusicalNote } from "react-icons/io";
import { GiGuitar, GiMusicalScore } from "react-icons/gi";
import { ChordsProgessionsExercise } from "./ChordsProgessionsExercise";
import { VoiceLeadingExercise } from "./VoiceLeadingExercise";

type ExerciseTab = "static" | "voice-leading" | "progressions";

export const App = () => {
  const [activeTab, setActiveTab] = useState<ExerciseTab>("voice-leading");

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8">
      <Title />
      <div className="flex w-full flex-col gap-6">
        <div
          className="flex w-fit flex-wrap rounded-lg border border-white/10 bg-white/5 p-1 text-center shadow-2xl shadow-black/20"
          role="tablist"
          aria-label="Exercise tabs"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "static"}
            className={`flex items-center justify-center rounded-md px-4 py-3 text-sm font-medium transition focus:ring-2 focus:ring-cyan-300 focus:outline-none ${
              activeTab === "static"
                ? "bg-white text-neutral-950"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => setActiveTab("static")}
          >
            <IoMdMusicalNote className="mr-2 h-5 w-5" />
            Static
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "voice-leading"}
            className={`flex items-center justify-center rounded-md px-4 py-3 text-sm font-medium transition focus:ring-2 focus:ring-cyan-300 focus:outline-none ${
              activeTab === "voice-leading"
                ? "bg-white text-neutral-950"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => setActiveTab("voice-leading")}
          >
            <GiGuitar className="mr-2 h-5 w-5" />
            Voice Leading
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "progressions"}
            className={`flex items-center justify-center rounded-md px-4 py-3 text-sm font-medium transition focus:ring-2 focus:ring-cyan-300 focus:outline-none ${
              activeTab === "progressions"
                ? "bg-white text-neutral-950"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => setActiveTab("progressions")}
          >
            <GiMusicalScore className="mr-2 h-5 w-5" />
            Chords Progressions
          </button>
        </div>
        <div>
          {activeTab === "static" ? (
            <ChordsDegreesExercise />
          ) : activeTab === "voice-leading" ? (
            <VoiceLeadingExercise />
          ) : (
            <ChordsProgessionsExercise />
          )}
        </div>
      </div>
    </div>
  );
};
