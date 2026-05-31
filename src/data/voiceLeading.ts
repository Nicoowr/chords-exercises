export type VoiceLeadingProgressionLevel = "Basic" | "Common" | "Sevenths";

export type VoiceLeadingProgression = {
  id: string;
  level: VoiceLeadingProgressionLevel;
  chords: readonly string[];
};

export type VoiceLeadingTargetLevel =
  | "Starter"
  | "Level 1"
  | "Level 2"
  | "Level 3"
  | "Level 4";

export type VoiceLeadingTarget = {
  id: string;
  label: string;
  levels: readonly VoiceLeadingTargetLevel[];
};

export const VOICE_LEADING_PROGRESSION_LEVELS: VoiceLeadingProgressionLevel[] =
  ["Basic", "Common", "Sevenths"];

export const DEFAULT_VOICE_LEADING_PROGRESSION_LEVELS: VoiceLeadingProgressionLevel[] =
  ["Basic", "Common"];

export const VOICE_LEADING_PROGRESSIONS: VoiceLeadingProgression[] = [
  { id: "v-i", level: "Basic", chords: ["V", "I"] },
  { id: "iv-i", level: "Basic", chords: ["IV", "I"] },
  { id: "ii-v", level: "Basic", chords: ["ii", "V"] },
  { id: "ii-v-i", level: "Basic", chords: ["ii", "V", "I"] },
  { id: "i-vi-ii-v", level: "Common", chords: ["I", "vi", "ii", "V"] },
  { id: "i-vi-iv-v", level: "Common", chords: ["I", "vi", "IV", "V"] },
  { id: "vi-iv-i-v", level: "Common", chords: ["vi", "IV", "I", "V"] },
  { id: "i-iv-v-i", level: "Common", chords: ["I", "IV", "V", "I"] },
  {
    id: "iii-vi-ii-v",
    level: "Common",
    chords: ["iii", "vi", "ii", "V"],
  },
  {
    id: "imaj7-vi7-ii7-v7",
    level: "Sevenths",
    chords: ["Imaj7", "vi7", "ii7", "V7"],
  },
  {
    id: "ii7-v7-imaj7",
    level: "Sevenths",
    chords: ["ii7", "V7", "Imaj7"],
  },
];

export const VOICE_LEADING_TARGET_LEVELS: VoiceLeadingTargetLevel[] = [
  "Starter",
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 4",
];

export const DEFAULT_VOICE_LEADING_TARGET_LEVELS: VoiceLeadingTargetLevel[] = [
  "Starter",
];

export const VOICE_LEADING_TARGETS: VoiceLeadingTarget[] = [
  { id: "1", label: "1", levels: ["Level 1"] },
  { id: "3", label: "3", levels: ["Starter", "Level 1"] },
  { id: "5", label: "5", levels: ["Level 1"] },
  { id: "7", label: "7", levels: ["Starter", "Level 1"] },
  { id: "3-to-1", label: "3 \u2192 1", levels: ["Level 2"] },
  { id: "7-to-3", label: "7 \u2192 3", levels: ["Level 2"] },
  { id: "3-to-3", label: "3 \u2192 3", levels: ["Level 2"] },
  { id: "7-to-7", label: "7 \u2192 7", levels: ["Level 2"] },
  { id: "3-plus-7", label: "3+7", levels: ["Starter", "Level 3"] },
  { id: "1-plus-3", label: "1+3", levels: ["Level 3"] },
  { id: "1-plus-7", label: "1+7", levels: ["Level 3"] },
  { id: "triad", label: "Triad", levels: ["Level 4"] },
  { id: "shell", label: "Shell", levels: ["Level 4"] },
  { id: "small-chord", label: "Small chord", levels: ["Level 4"] },
];

const PROGRESSION_SEPARATOR = " \u2192 ";

const sortByReference = <T extends string>(values: T[], reference: T[]) => {
  return values.slice().sort((a, b) => {
    const indexA = reference.indexOf(a);
    const indexB = reference.indexOf(b);

    if (indexA === -1 || indexB === -1) {
      throw new Error(
        "Elements in the list are not present in the reference list",
      );
    }

    return indexA - indexB;
  });
};

export const sortVoiceLeadingProgressionLevels = (
  levels: VoiceLeadingProgressionLevel[],
) => sortByReference(levels, VOICE_LEADING_PROGRESSION_LEVELS);

export const sortVoiceLeadingTargetLevels = (
  levels: VoiceLeadingTargetLevel[],
) => sortByReference(levels, VOICE_LEADING_TARGET_LEVELS);

export const getVoiceLeadingProgressionsForLevels = (
  levels: VoiceLeadingProgressionLevel[],
) =>
  VOICE_LEADING_PROGRESSIONS.filter((progression) =>
    levels.includes(progression.level),
  );

export const getVoiceLeadingTargetsForLevels = (
  levels: VoiceLeadingTargetLevel[],
) =>
  VOICE_LEADING_TARGETS.filter((target) =>
    target.levels.some((level) => levels.includes(level)),
  );

export const formatVoiceLeadingProgression = ({
  chords,
}: VoiceLeadingProgression) => chords.join(PROGRESSION_SEPARATOR);
