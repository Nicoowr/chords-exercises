import { MultiSelectField } from "./MultiSelectField";
import { ALL_CHORDS, type Chord } from "../hooks/useAvailableChords";
import { ALL_DEGREES, type Degree } from "../hooks/useAvailableDegrees";

type Props = {
  availableChords: Chord[];
  setAvailableChords: (chords: Chord[]) => void;
  availableDegrees: Degree[];
  setAvailableDegrees: (chords: Degree[]) => void;
  sortChords: (chords: Chord[]) => Chord[];
};

export const SelectChordsAndDegrees = ({
  availableDegrees,
  setAvailableChords,
  setAvailableDegrees,
  availableChords,
  sortChords,
}: Props) => {
  return (
    <div className="flex flex-row">
      <MultiSelectField<Chord>
        options={ALL_CHORDS}
        selectedValues={sortChords(availableChords)}
        onChange={(selectedValues) => setAvailableChords(selectedValues)}
      />
      <MultiSelectField<Degree>
        options={ALL_DEGREES}
        selectedValues={availableDegrees}
        onChange={(selectedValues) => setAvailableDegrees(selectedValues)}
      />
    </div>
  );
};
