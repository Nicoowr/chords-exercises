import React from "react";
import { Dashboard } from "./Dashboard";
import { ChordAndNoteDegree } from "./ChordAndNoteDegree";
import { PlayPauseExercise } from "./PlayPauseExercise";
import { useAvailableChords } from "../hooks/useAvailableChords";
import { useAvailableDegrees } from "../hooks/useAvailableDegrees";
import { useDegreePermutation } from "../hooks/useDegreePermutation";
import { useKeyboardEventHandler } from "../hooks/useKeyboardEventHandler";
import { Title } from "./Title";
import { useAvailablePositions } from "../hooks/useAvailablePositions";
import { ChordsDegreesExercise } from "./ChordsDegreesExercise";
import { type CustomFlowbiteTheme, Flowbite, Tabs } from "flowbite-react";
import { IoMdMusicalNote } from "react-icons/io";
import { GiMusicalScore } from "react-icons/gi";
import { ChordsProgessionsExercise } from "./ChordsProgessionsExercise";

const customTheme: CustomFlowbiteTheme = {
  tabs: {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        underline: "flex-wrap -mb-px border-b border-white dark:border-white",
      },
      tabitem: {
        base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-white focus:outline-none",
        styles: {
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "text-cyan-600 rounded-t-lg border-b-2 border-white active dark:text-white dark:border-white",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
    },
    tabpanel: "py-3",
  },
};

export const App = () => {
  return (
    <>
      <Title />
      <Flowbite theme={{ theme: customTheme }}>
        <Tabs aria-label="Default tabs" style="underline">
          <Tabs.Item active title="Chords Degrees" icon={IoMdMusicalNote}>
            <ChordsDegreesExercise />
          </Tabs.Item>
          <Tabs.Item title="Chords Progressions" icon={GiMusicalScore}>
            <ChordsProgessionsExercise />
          </Tabs.Item>
        </Tabs>
      </Flowbite>
    </>
  );
};
