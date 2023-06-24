import { SelectChordsAndDegrees } from "./SelectChordsAndDegrees";
import { Stopwatch } from "./Stopwatch";
import { ChordAndNoteDegree } from "./ChordAndNoteDegree";
import { PlayPauseExercise } from "./PlayPauseExercise";
import { useAvailableChords } from "../hooks/useAvailableChords";
import { useAvailableDegrees } from "../hooks/useAvailableDegrees";
import { useDegreePermutation } from "../hooks/useDegreePermutation";
import { useKeyboardEventHandler } from "../hooks/useKeyboardEventHandler";
import { Title } from "./Title";

export const App = () => {
  const { availableChords, setAvailableChords, sortChords } =
    useAvailableChords();
  const { availableDegrees, setAvailableDegrees } = useAvailableDegrees();
  const { startStopPermutation, noteDegree, chordDegree, isPaused } =
    useDegreePermutation({ availableChords, availableDegrees });
  useKeyboardEventHandler({ spaceKeyDownHandler: startStopPermutation });
  return (
    <>
      <Title />
      <SelectChordsAndDegrees
        availableChords={availableChords}
        availableDegrees={availableDegrees}
        setAvailableChords={setAvailableChords}
        setAvailableDegrees={setAvailableDegrees}
        sortChords={sortChords}
      />
      <Stopwatch isPaused={isPaused} />
      <ChordAndNoteDegree chordDegree={chordDegree} noteDegree={noteDegree} />
      <PlayPauseExercise
        isPaused={isPaused}
        startStopPermutation={startStopPermutation}
      />
    </>
  );
};
