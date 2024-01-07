import { useLocalState } from "./useLocalState";
import { type Chord } from "./useAvailableChords";

export type ChordsProgression = `${Chord} - ${Chord} - ${Chord} - ${Chord}`;
const DEFAULT_CHORDS_PROGRESSIONS: ChordsProgression[] = ["I - V - vi - IV"];
export const ALL_CHORDS_PROGRESSIONS: ChordsProgression[] = [
  "I - V - vi - IV",
  "I - vi - IV - V",
  "vi - ii - V - I",
  "IV - V - iii - vi",
];

export const sortChordsProgressions = (
  chordsProgressions: ChordsProgression[]
) => {
  return chordsProgressions.slice().sort((a, b) => {
    const indexA = ALL_CHORDS_PROGRESSIONS.indexOf(a);
    const indexB = ALL_CHORDS_PROGRESSIONS.indexOf(b);

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

export const useAvailableChordsProgressions = () => {
  const [availableChordsProgressions, setAvailableChordsProgressions] =
    useLocalState<ChordsProgression[]>(
      DEFAULT_CHORDS_PROGRESSIONS,
      "chordsProgressions"
    );

  return {
    availableChordsProgressions,
    setAvailableChordsProgressions,
  };
};
