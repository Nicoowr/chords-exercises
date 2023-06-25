import { useCallback, useState } from "react";
import { useInterval } from "./useInterval";
import { type Chord } from "./useAvailableChords";
import { type Degree } from "./useAvailableDegrees";

const DEFAULT_INTERVAL_S = 5;

function getRandomElement<T>(array: T[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex] as T;
}

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
  const [intervalInS, setIntervalInS] = useState(DEFAULT_INTERVAL_S);

  const startStopPermutation = useCallback(() => {
    setIsPaused(!isPaused);
  }, [setIsPaused, isPaused]);

  useInterval(
    () => {
      const randomChordDegree = getRandomElement(availableChords);
      const randomNoteDegree = getRandomElement(availableDegrees);
      setChordDegree(randomChordDegree);
      setNoteDegree(randomNoteDegree);
    },
    isPaused ? null : intervalInS * 1000
  );

  return {
    startStopPermutation,
    chordDegree,
    noteDegree,
    isPaused,
    setIntervalInS: setIntervalInS,
    intervalInS: intervalInS,
  };
};
