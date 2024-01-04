import { useCallback, useEffect, useState } from "react";
import { useInterval } from "./useInterval";
import { type Chord } from "./useAvailableChords";
import { type Degree } from "./useAvailableDegrees";
import { type Position } from "./useAvailablePositions";
import { modulo } from "../utils/modulo";

const DEFAULT_INTERVAL_S = 5;

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

function selectNextRandomAdjacentElement<T>(array: T[], currentElement: T) {
  const indexOfCurrentElement = array.findIndex(
    (element) => element === currentElement
  );
  const adjacentElementsIndices = [
    modulo(indexOfCurrentElement - 1, array.length),
    modulo(indexOfCurrentElement + 1, array.length),
  ];
  const randomIndex = Math.floor(
    Math.random() * adjacentElementsIndices.length
  );

  // @ts-expect-error: the indices will never go out of their relative array length
  return array[adjacentElementsIndices[randomIndex]] as T;
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
  availablePositions,
}: {
  availablePositions: Position[];
  availableChords: Chord[];
  availableDegrees: Degree[];
}) => {
  const [chordDegree, setChordDegree] = useState<string>("I");
  const [noteDegree, setNoteDegree] = useState<string>("1");
  const [position, setPosition] = useState<Position>("3");
  const [isPaused, setIsPaused] = useState(true);
  const [intervalInS, setIntervalInS] = useState(DEFAULT_INTERVAL_S);

  usePauseWhenEmptyAvailableChordsOrDegrees({
    availableDegrees,
    availableChords,
    setIsPaused,
  });

  const startStopPermutation = useCallback(() => {
    setIsPaused(!isPaused);
  }, [setIsPaused, isPaused]);

  // TODO: chords progression
  useInterval(
    () => {
      const randomChordDegree = selectNextElement(availableChords, chordDegree);
      const randomNoteDegree = selectNextElement(availableDegrees, noteDegree);
      const randomPosition = selectNextRandomAdjacentElement(
        availablePositions,
        position
      );
      setChordDegree(randomChordDegree);
      setNoteDegree(randomNoteDegree);
      setPosition(randomPosition);
    },
    isPaused ? null : intervalInS * 1000
  );

  return {
    startStopPermutation,
    chordDegree,
    noteDegree,
    isPaused,
    position,
    setIntervalInS: setIntervalInS,
    intervalInS: intervalInS,
  };
};
