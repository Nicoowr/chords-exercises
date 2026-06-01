import { useCallback, useEffect, useState } from "react";
import {
  VOICE_LEADING_PROGRESSIONS,
  VOICE_LEADING_TARGETS,
  type VoiceLeadingProgression,
  type VoiceLeadingTarget,
} from "../data/voiceLeading";
import { modulo } from "../utils/modulo";
import { useInterval } from "./useInterval";
import { type Position } from "./useAvailablePositions";

const DEFAULT_INTERVAL_S = 15;
const DEFAULT_POSITION: Position = "3";
const DEFAULT_PROGRESSION =
  VOICE_LEADING_PROGRESSIONS[0] as VoiceLeadingProgression;
const DEFAULT_TARGET = VOICE_LEADING_TARGETS[0] as VoiceLeadingTarget;

function getRandomElement<T>(array: T[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex] as T;
}

function selectNextElement<T>(array: T[], previousElement: T): T {
  if (array.length === 1 && array[0]) {
    return array[0];
  }

  const randomElement = getRandomElement(array);

  if (randomElement === previousElement) {
    return selectNextElement(array, previousElement);
  }

  return randomElement;
}

function selectNextRandomAdjacentElement<T>(array: T[], currentElement: T) {
  if (array.length === 1 && array[0]) {
    return array[0];
  }

  const indexOfCurrentElement = array.findIndex(
    (element) => element === currentElement,
  );

  if (indexOfCurrentElement === -1) {
    return getRandomElement(array);
  }

  const adjacentElementsIndices = [
    modulo(indexOfCurrentElement - 1, array.length),
    indexOfCurrentElement,
    modulo(indexOfCurrentElement + 1, array.length),
  ];
  const randomIndex = Math.floor(
    Math.random() * adjacentElementsIndices.length,
  );
  const nextElement = array[adjacentElementsIndices[randomIndex] ?? 0];

  if (nextElement === undefined) {
    return getRandomElement(array);
  }

  return nextElement;
}

const usePauseWhenVoiceLeadingSelectionIsEmpty = ({
  availablePositions,
  availableProgressions,
  availableTargets,
  setIsPaused,
}: {
  availablePositions: Position[];
  availableProgressions: VoiceLeadingProgression[];
  availableTargets: VoiceLeadingTarget[];
  setIsPaused: (isPaused: boolean) => void;
}) => {
  useEffect(() => {
    if (
      availablePositions.length === 0 ||
      availableProgressions.length === 0 ||
      availableTargets.length === 0
    ) {
      setIsPaused(true);
    }
  }, [
    availablePositions,
    availableProgressions,
    availableTargets,
    setIsPaused,
  ]);
};

export const useVoiceLeadingPermutation = ({
  availablePositions,
  availableProgressions,
  availableTargets,
}: {
  availablePositions: Position[];
  availableProgressions: VoiceLeadingProgression[];
  availableTargets: VoiceLeadingTarget[];
}) => {
  const [position, setPosition] = useState<Position>(
    availablePositions[0] ?? DEFAULT_POSITION,
  );
  const [progression, setProgression] = useState<VoiceLeadingProgression>(
    availableProgressions[0] ?? DEFAULT_PROGRESSION,
  );
  const [target, setTarget] = useState<VoiceLeadingTarget>(
    availableTargets[0] ?? DEFAULT_TARGET,
  );
  const [isPaused, setIsPaused] = useState(true);
  const [intervalInS, setIntervalInS] = useState(DEFAULT_INTERVAL_S);

  usePauseWhenVoiceLeadingSelectionIsEmpty({
    availablePositions,
    availableProgressions,
    availableTargets,
    setIsPaused,
  });

  const startStopPermutation = useCallback(() => {
    setIsPaused((currentlyPaused) => !currentlyPaused);
  }, []);

  useInterval(
    () => {
      if (
        availablePositions.length === 0 ||
        availableProgressions.length === 0 ||
        availableTargets.length === 0
      ) {
        return;
      }

      const randomPosition = selectNextRandomAdjacentElement(
        availablePositions,
        position,
      );
      const randomProgression = selectNextElement(
        availableProgressions,
        progression,
      );
      const randomTarget = selectNextElement(availableTargets, target);

      setPosition(randomPosition);
      setProgression(randomProgression);
      setTarget(randomTarget);
    },
    isPaused ? null : intervalInS * 1000,
  );

  return {
    startStopPermutation,
    isPaused,
    intervalInS,
    setIntervalInS,
    position,
    progression,
    target,
  };
};
