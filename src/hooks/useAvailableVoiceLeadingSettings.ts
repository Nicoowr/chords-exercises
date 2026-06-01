import {
  DEFAULT_VOICE_LEADING_PROGRESSION_LEVELS,
  DEFAULT_VOICE_LEADING_TARGET_LEVELS,
  type VoiceLeadingProgressionLevel,
  type VoiceLeadingTargetLevel,
} from "../data/voiceLeading";
import { useLocalState } from "./useLocalState";

export const useAvailableVoiceLeadingProgressionLevels = () => {
  const [
    availableVoiceLeadingProgressionLevels,
    setAvailableVoiceLeadingProgressionLevels,
  ] = useLocalState<VoiceLeadingProgressionLevel[]>(
    DEFAULT_VOICE_LEADING_PROGRESSION_LEVELS,
    "voiceLeadingProgressionLevels",
  );

  return {
    availableVoiceLeadingProgressionLevels,
    setAvailableVoiceLeadingProgressionLevels,
  };
};

export const useAvailableVoiceLeadingTargetLevels = () => {
  const [
    availableVoiceLeadingTargetLevels,
    setAvailableVoiceLeadingTargetLevels,
  ] = useLocalState<VoiceLeadingTargetLevel[]>(
    DEFAULT_VOICE_LEADING_TARGET_LEVELS,
    "voiceLeadingTargetLevels",
  );

  return {
    availableVoiceLeadingTargetLevels,
    setAvailableVoiceLeadingTargetLevels,
  };
};
