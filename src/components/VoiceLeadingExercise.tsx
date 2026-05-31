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
import { PlayPauseExercise } from "./PlayPauseExercise";
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
    startStopPermutation,
    isPaused,
    intervalInS,
    setIntervalInS,
    position,
    progression,
    target,
  } = useVoiceLeadingPermutation({
    availablePositions,
    availableProgressions,
    availableTargets,
  });

  useKeyboardEventHandler({ spaceKeyDownHandler: startStopPermutation });

  return (
    <>
      <Dashboard
        availablePositions={availablePositions}
        setAvailablePositions={setAvailablePositions}
        isPaused={isPaused}
        setIntervalInS={setIntervalInS}
        intervalInS={intervalInS}
        intervalMaxInS={20}
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
      <PlayPauseExercise
        isPaused={isPaused}
        startStopPermutation={startStopPermutation}
      />
    </>
  );
};
