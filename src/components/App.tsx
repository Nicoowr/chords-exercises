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
    <>
      <Title />
      <div className="flex w-full max-w-6xl flex-col gap-3">
        <div
          className="flex flex-wrap border-b border-white text-center"
          role="tablist"
          aria-label="Exercise tabs"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "static"}
            className={`flex items-center justify-center rounded-t-lg border-b-2 p-4 text-sm font-medium focus:ring-4 focus:ring-white focus:outline-none ${
              activeTab === "static"
                ? "border-white text-white"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300"
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
            className={`flex items-center justify-center rounded-t-lg border-b-2 p-4 text-sm font-medium focus:ring-4 focus:ring-white focus:outline-none ${
              activeTab === "voice-leading"
                ? "border-white text-white"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300"
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
            className={`flex items-center justify-center rounded-t-lg border-b-2 p-4 text-sm font-medium focus:ring-4 focus:ring-white focus:outline-none ${
              activeTab === "progressions"
                ? "border-white text-white"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("progressions")}
          >
            <GiMusicalScore className="mr-2 h-5 w-5" />
            Chords Progressions
          </button>
        </div>
        <div className="py-3">
          {activeTab === "static" ? (
            <ChordsDegreesExercise />
          ) : activeTab === "voice-leading" ? (
            <VoiceLeadingExercise />
          ) : (
            <ChordsProgessionsExercise />
          )}
        </div>
      </div>
    </>
  );
};
