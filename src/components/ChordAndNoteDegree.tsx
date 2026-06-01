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
  I: "text-neutral-100",
  ii: "text-neutral-300",
  iii: "text-neutral-400",
  IV: "text-neutral-200",
  V: "text-neutral-300",
  vi: "text-neutral-400",
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
        {position && <span className="text-neutral-100">{position} </span>}
        {chordDegree && (
          <span className="text-neutral-300">{chordDegree} </span>
        )}
        {noteDegree && <span>{noteDegree} </span>}
        {chordsProgression && colorChordProgression(chordsProgression)}
      </h1>
    </div>
  );
};
