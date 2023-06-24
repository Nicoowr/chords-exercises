type Props = {
  chordDegree: string;
  noteDegree: number;
};

export const ChordAndNoteDegree = ({ chordDegree, noteDegree }: Props) => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        <span className="text-red-600">{chordDegree}</span> {noteDegree}
      </h1>
    </div>
  );
};
