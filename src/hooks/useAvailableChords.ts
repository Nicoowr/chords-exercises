import { useState } from "react";

export type Chord = "I" | "ii" | "iii" | "IV" | "V" | "vi";
const DEFAULT_CHORDS: Chord[] = ["I", "IV", "V", "vi"];
export const ALL_CHORDS: Chord[] = ["I", "ii", "iii", "IV", "V", "vi"];

export const sortChords = (chords: Chord[]) => {
  return chords.slice().sort((a, b) => {
    const indexA = ALL_CHORDS.indexOf(a);
    const indexB = ALL_CHORDS.indexOf(b);

    if (indexA == -1 || indexB == -1) {
      throw new Error(
        "Elements in the list are not present in the reference list"
      );
    }

    if (indexA < indexB) {
      return -1;
    }

    if (indexA > indexB) {
      return 1;
    }

    return 0;
  });
};

export const useAvailableChords = () => {
  const [availableChords, setAvailableChords] =
    useState<Chord[]>(DEFAULT_CHORDS);

  return {
    availableChords,
    setAvailableChords,
  };
};
