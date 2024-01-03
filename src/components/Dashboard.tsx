import { MultiSelectField } from "./lib/MultiSelectField";
import {
  ALL_CHORDS,
  type Chord,
  sortChords,
} from "../hooks/useAvailableChords";
import {
  ALL_DEGREES,
  type Degree,
  sortDegrees,
} from "../hooks/useAvailableDegrees";
import { Stopwatch } from "./Stopwatch";
import { IntervalSlider } from "./IntervalSlider";
import {
  ALL_POSITIONS,
  type Position,
  sortPositions,
} from "../hooks/useAvailablePositions";

type Props = {
  availableChords: Chord[];
  setAvailableChords: (chords: Chord[]) => void;
  availableDegrees: Degree[];
  setAvailableDegrees: (chords: Degree[]) => void;
  isPaused: boolean;
  intervalInS: number;
  setIntervalInS: (intervalInMs: number) => void;
  setAvailablePositions: (positions: Position[]) => void;
  availablePositions: Position[];
};

export const Dashboard = ({
  availableDegrees,
  setAvailableChords,
  setAvailableDegrees,
  setAvailablePositions,
  availablePositions,
  availableChords,
  isPaused,
  intervalInS,
  setIntervalInS,
}: Props) => {
  return (
    <div className="flex w-full justify-between p-8">
      <MultiSelectField<Position>
        options={ALL_POSITIONS}
        selectedValues={sortPositions(availablePositions)}
        onChange={(selectedValues) =>
          setAvailablePositions(sortPositions(selectedValues))
        }
        label="Position"
      />
      <MultiSelectField<Chord>
        options={ALL_CHORDS}
        selectedValues={sortChords(availableChords)}
        onChange={(selectedValues) =>
          setAvailableChords(sortChords(selectedValues))
        }
        label="Chords"
      />
      <MultiSelectField<Degree>
        options={ALL_DEGREES}
        selectedValues={sortDegrees(availableDegrees)}
        onChange={(selectedValues) =>
          setAvailableDegrees(sortDegrees(selectedValues))
        }
        label="Degrees"
      />
      <IntervalSlider
        intervalInS={intervalInS}
        setIntervalInS={setIntervalInS}
      />
      <Stopwatch isPaused={isPaused} />
    </div>
  );
};
