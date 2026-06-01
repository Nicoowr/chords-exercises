import { type Position } from "../hooks/useAvailablePositions";
import { type ChordsProgression } from "../hooks/useAvailableChordsProgressions";
import { type Chord } from "../hooks/useAvailableChords";
import { Fragment } from "react";

type Props = {
  chordDegree: string | null;
  noteDegree: string | null;
  position: Position | null;
  chordsProgression: ChordsProgression | null;
};

const chordColorMapping: { [chord in Chord]: string } = {
  I: "text-sky-300",
  ii: "text-sky-300/90",
  iii: "text-sky-300/80",
  IV: "text-sky-200",
  V: "text-sky-200/90",
  vi: "text-sky-200/80",
};

const colorChordProgression = (chordsProgression: ChordsProgression) => {
  const chords = chordsProgression.split(" - ") as Chord[];

  return chords.map((chord, index) => {
    return (
      <Fragment key={`${chord}-${index}`}>
        {index !== 0 ? " - " : null}
        <span className={chordColorMapping[chord]}>{chord}</span>
      </Fragment>
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
    <div className="flex min-h-80 flex-col items-center justify-center gap-12 px-2 py-10">
      <h1 className="text-center text-5xl font-black tracking-normal text-white sm:text-7xl lg:text-8xl">
        {position && <span className="text-amber-300">{position} </span>}
        {chordDegree && <span className="text-sky-300">{chordDegree} </span>}
        {noteDegree && <span className="text-rose-300">{noteDegree} </span>}
        {chordsProgression && colorChordProgression(chordsProgression)}
      </h1>
    </div>
  );
};
