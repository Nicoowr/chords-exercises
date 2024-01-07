import React from "react";
import { Dashboard } from "./Dashboard";
import { ChordAndNoteDegree } from "./ChordAndNoteDegree";
import { PlayPauseExercise } from "./PlayPauseExercise";
import { useAvailablePositions } from "../hooks/useAvailablePositions";
import { useKeyboardEventHandler } from "../hooks/useKeyboardEventHandler";
import { useAvailableChordsProgressions } from "../hooks/useAvailableChordsProgressions";
import { useProgressionPermutation } from "../hooks/useProgressionPermutation";

export const ChordsProgessionsExercise = () => {
  const { availablePositions, setAvailablePositions } = useAvailablePositions();
  const { availableChordsProgressions, setAvailableChordsProgressions } =
    useAvailableChordsProgressions();
  const {
    startStopPermutation,
    chordsProgression,
    isPaused,
    position,
    setIntervalInS,
    intervalInS,
  } = useProgressionPermutation({
    availableChordsProgressions,
    availablePositions,
  });
  useKeyboardEventHandler({ spaceKeyDownHandler: startStopPermutation });
  return (
    <>
      <Dashboard
        availablePositions={availablePositions}
        setAvailablePositions={setAvailablePositions}
        availableChordsProgressions={availableChordsProgressions}
        setAvailableChordsProgressions={setAvailableChordsProgressions}
        isPaused={isPaused}
        setIntervalInS={setIntervalInS}
        intervalInS={intervalInS}
      />
      <ChordAndNoteDegree
        chordsProgression={chordsProgression}
        chordDegree={null}
        noteDegree={null}
        position={position}
      />
      <PlayPauseExercise
        isPaused={isPaused}
        startStopPermutation={startStopPermutation}
      />
    </>
  );
};
