import { useCallback, useEffect, useState } from "react";
import { useInterval } from "./useInterval";
import { type Chord } from "./useAvailableChords";
import { type Degree } from "./useAvailableDegrees";
import { type Position } from "./useAvailablePositions";
import { modulo } from "../utils/modulo";
import { type ChordsProgression } from "./useAvailableChordsProgressions";

const DEFAULT_INTERVAL_S = 5;
const DEFAULT_CHORDS_PROGRESSION: ChordsProgression = "I - V - vi - IV";
const DEFAULT_POSITION: Position = "3";
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

export const useProgressionPermutation = ({
  availableChordsProgressions,
  availablePositions,
}: {
  availablePositions: Position[];
  availableChordsProgressions: ChordsProgression[];
}) => {
  const [chordsProgression, setChordsProgression] = useState<ChordsProgression>(
    availableChordsProgressions[0] ?? DEFAULT_CHORDS_PROGRESSION
  );
  const [position, setPosition] = useState<Position>(
    availablePositions[0] ?? DEFAULT_POSITION
  );
  const [isPaused, setIsPaused] = useState(true);
  const [intervalInS, setIntervalInS] = useState(DEFAULT_INTERVAL_S);

  const startStopPermutation = useCallback(() => {
    setIsPaused(!isPaused);
  }, [setIsPaused, isPaused]);

  useInterval(
    () => {
      const randomChordsProgression = selectNextElement(
        availableChordsProgressions,
        chordsProgression
      );
      const randomPosition = selectNextRandomAdjacentElement(
        availablePositions,
        position
      );
      setChordsProgression(randomChordsProgression);
      setPosition(randomPosition);
    },
    isPaused ? null : intervalInS * 1000
  );

  return {
    startStopPermutation,
    chordsProgression,
    isPaused,
    position,
    setIntervalInS: setIntervalInS,
    intervalInS: intervalInS,
  };
};
