import { useLocalState } from "./useLocalState";

export type Chord = "I" | "ii" | "iii" | "IV" | "V" | "vi";
const DEFAULT_CHORDS: Chord[] = ["I", "ii", "iii", "IV", "V", "vi"];
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
  const [availableChords, setAvailableChords] = useLocalState<Chord[]>(
    DEFAULT_CHORDS,
    "chords"
  );

  return {
    availableChords,
    setAvailableChords,
  };
};
