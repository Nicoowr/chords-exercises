import React from "react";
import { Dashboard } from "./Dashboard";
import { ChordAndNoteDegree } from "./ChordAndNoteDegree";
import { PlayPauseExercise } from "./PlayPauseExercise";
import { useAvailableChords } from "../hooks/useAvailableChords";
import { useAvailableDegrees } from "../hooks/useAvailableDegrees";
import { useAvailablePositions } from "../hooks/useAvailablePositions";
import { useDegreePermutation } from "../hooks/useDegreePermutation";
import { useKeyboardEventHandler } from "../hooks/useKeyboardEventHandler";

export const ChordsDegreesExercise = () => {
  const { availableChords, setAvailableChords } = useAvailableChords();
  const { availableDegrees, setAvailableDegrees } = useAvailableDegrees();
  const { availablePositions, setAvailablePositions } = useAvailablePositions();
  const {
    startStopPermutation,
    noteDegree,
    chordDegree,
    isPaused,
    position,
    setIntervalInS,
    intervalInS,
  } = useDegreePermutation({
    availableChords,
    availableDegrees,
    availablePositions,
  });
  useKeyboardEventHandler({ spaceKeyDownHandler: startStopPermutation });
  return (
    <>
      <Dashboard
        availablePositions={availablePositions}
        setAvailablePositions={setAvailablePositions}
        availableChords={availableChords}
        availableDegrees={availableDegrees}
        setAvailableChords={setAvailableChords}
        setAvailableDegrees={setAvailableDegrees}
        isPaused={isPaused}
        setIntervalInS={setIntervalInS}
        intervalInS={intervalInS}
      />
      <ChordAndNoteDegree
        chordsProgression={null}
        chordDegree={chordDegree}
        noteDegree={noteDegree}
        position={position}
      />
      <PlayPauseExercise
        isPaused={isPaused}
        startStopPermutation={startStopPermutation}
      />
    </>
  );
};
