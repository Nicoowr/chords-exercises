import { useCallback, useEffect, useState } from "react";
import { useInterval } from "./useInterval";
import { type Chord } from "./useAvailableChords";
import { type Degree } from "./useAvailableDegrees";

const INTERVAL_MS = 5000;

function getRandomElement<T>(array: T[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex] as T;
}

function selectNextElement<T>(array: T[], previousElement: T): T {
  // TODO: Empty array case not taken into account
  if (array.length === 1 && array[0]) {
    return array[0];
  }
  const randomElement = getRandomElement(array);
  // If the same element is chosen, rerun the function
  if (randomElement === previousElement) {
    return selectNextElement(array, previousElement);
  }
  return randomElement;
}

const usePauseWhenEmptyAvailableChordsOrDegrees = ({
  availableDegrees,
  availableChords,
  setIsPaused,
}: {
  availableChords: Chord[];
  availableDegrees: Degree[];
  setIsPaused: (isPaused: boolean) => void;
}) => {
  useEffect(() => {
    if (availableDegrees.length === 0 || availableChords.length === 0) {
      setIsPaused(true);
    }
  }, [availableDegrees, availableChords]);
};

export const useDegreePermutation = ({
  availableDegrees,
  availableChords,
}: {
  availableChords: Chord[];
  availableDegrees: Degree[];
}) => {
  const [chordDegree, setChordDegree] = useState<string>("I");
  const [noteDegree, setNoteDegree] = useState<string>("1");
  const [isPaused, setIsPaused] = useState(true);

  usePauseWhenEmptyAvailableChordsOrDegrees({
    availableDegrees,
    availableChords,
    setIsPaused,
  });

  const startStopPermutation = useCallback(() => {
    setIsPaused(!isPaused);
  }, [setIsPaused, isPaused]);

  useInterval(
    () => {
      const randomChordDegree = selectNextElement(availableChords, chordDegree);
      const randomNoteDegree = selectNextElement(availableDegrees, noteDegree);
      setChordDegree(randomChordDegree);
      setNoteDegree(randomNoteDegree);
    },
    isPaused ? null : INTERVAL_MS
  );

  return {
    startStopPermutation,
    chordDegree,
    noteDegree,
    isPaused,
  };
};
