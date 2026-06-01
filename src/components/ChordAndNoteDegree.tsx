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
  I: "text-sky-200/90",
  ii: "text-sky-200/80",
  iii: "text-sky-200/70",
  IV: "text-sky-100/90",
  V: "text-sky-100/80",
  vi: "text-sky-100/70",
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
        {position && <span className="text-amber-200/90">{position} </span>}
        {chordDegree && <span className="text-sky-200/90">{chordDegree} </span>}
        {noteDegree && <span className="text-rose-200/90">{noteDegree} </span>}
        {chordsProgression && colorChordProgression(chordsProgression)}
      </h1>
    </div>
  );
};
