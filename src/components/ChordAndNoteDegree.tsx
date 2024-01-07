import { type Position } from "../hooks/useAvailablePositions";
import { type ChordsProgression } from "../hooks/useAvailableChordsProgressions";
import { type Chord } from "../hooks/useAvailableChords";

type Props = {
  chordDegree: string | null;
  noteDegree: string | null;
  position: Position | null;
  chordsProgression: ChordsProgression | null;
};

const chordColorMapping: { [chord in Chord]: string } = {
  I: "text-pink-600",
  ii: "text-sky-500",
  iii: "text-green-700",
  IV: "text-yellow-500",
  V: "text-yellow-900",
  vi: "text-orange-500",
};

const colorChordProgression = (chordsProgression: ChordsProgression) => {
  const chords = chordsProgression.split(" - ") as Chord[];

  return chords.map((chord, index) => {
    return (
      <>
        {index !== 0 ? " - " : null}
        <span key={chord} className={chordColorMapping[chord]}>
          {chord}
        </span>
      </>
    );
  });
};

export const ChordAndNoteDegree = ({
  chordDegree,
  noteDegree,
  position,
  chordsProgression,
}: Props) => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {position && <span className="text-yellow-600">{position} </span>}
        {chordDegree && <span className="text-red-600">{chordDegree} </span>}
        {noteDegree && <span>{noteDegree} </span>}
        {chordsProgression && colorChordProgression(chordsProgression)}
      </h1>
    </div>
  );
};
