import React, { useMemo } from "react";
import {
  getVoiceLeadingProgressionsForLevels,
  getVoiceLeadingTargetsForLevels,
  sortVoiceLeadingProgressionLevels,
  sortVoiceLeadingTargetLevels,
  VOICE_LEADING_PROGRESSION_LEVELS,
  VOICE_LEADING_TARGET_LEVELS,
  type VoiceLeadingProgressionLevel,
  type VoiceLeadingTargetLevel,
} from "../data/voiceLeading";
import { useAvailablePositions } from "../hooks/useAvailablePositions";
import {
  useAvailableVoiceLeadingProgressionLevels,
  useAvailableVoiceLeadingTargetLevels,
} from "../hooks/useAvailableVoiceLeadingSettings";
import { useKeyboardEventHandler } from "../hooks/useKeyboardEventHandler";
import { useVoiceLeadingPermutation } from "../hooks/useVoiceLeadingPermutation";
import { Dashboard } from "./Dashboard";
import { MultiSelectField } from "./lib/MultiSelectField";
import { NextExercise } from "./NextExercise";
import { VoiceLeadingPrompt } from "./VoiceLeadingPrompt";

export const VoiceLeadingExercise = () => {
  const { availablePositions, setAvailablePositions } = useAvailablePositions();
  const {
    availableVoiceLeadingProgressionLevels,
    setAvailableVoiceLeadingProgressionLevels,
  } = useAvailableVoiceLeadingProgressionLevels();
  const {
    availableVoiceLeadingTargetLevels,
    setAvailableVoiceLeadingTargetLevels,
  } = useAvailableVoiceLeadingTargetLevels();

  const availableProgressions = useMemo(
    () =>
      getVoiceLeadingProgressionsForLevels(
        availableVoiceLeadingProgressionLevels,
      ),
    [availableVoiceLeadingProgressionLevels],
  );

  const availableTargets = useMemo(
    () => getVoiceLeadingTargetsForLevels(availableVoiceLeadingTargetLevels),
    [availableVoiceLeadingTargetLevels],
  );

  const {
    nextPermutation,
    pauseStopwatch,
    isPaused,
    position,
    progression,
    target,
  } = useVoiceLeadingPermutation({
    availablePositions,
    availableProgressions,
    availableTargets,
  });

  const canGoToNext =
    availablePositions.length > 0 &&
    availableProgressions.length > 0 &&
    availableTargets.length > 0;

  useKeyboardEventHandler({ spaceKeyDownHandler: nextPermutation });

  return (
    <>
      <Dashboard
        availablePositions={availablePositions}
        setAvailablePositions={setAvailablePositions}
        isPaused={isPaused}
        onStopwatchReset={pauseStopwatch}
      >
        <MultiSelectField<VoiceLeadingProgressionLevel>
          options={VOICE_LEADING_PROGRESSION_LEVELS}
          selectedValues={sortVoiceLeadingProgressionLevels(
            availableVoiceLeadingProgressionLevels,
          )}
          onChange={(selectedValues) =>
            setAvailableVoiceLeadingProgressionLevels(
              sortVoiceLeadingProgressionLevels(selectedValues),
            )
          }
          label="Progression Levels"
        />
        <MultiSelectField<VoiceLeadingTargetLevel>
          options={VOICE_LEADING_TARGET_LEVELS}
          selectedValues={sortVoiceLeadingTargetLevels(
            availableVoiceLeadingTargetLevels,
          )}
          onChange={(selectedValues) =>
            setAvailableVoiceLeadingTargetLevels(
              sortVoiceLeadingTargetLevels(selectedValues),
            )
          }
          label="Target Levels"
        />
      </Dashboard>
      <VoiceLeadingPrompt
        position={position}
        progression={progression}
        target={target}
      />
      <NextExercise disabled={!canGoToNext} onNext={nextPermutation} />
    </>
  );
};
