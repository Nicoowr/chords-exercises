type Props = {
  intervalInS: number;
  setIntervalInS: (intervalInMs: number) => void;
  min?: number;
  max?: number;
};

export const IntervalSlider = ({
  intervalInS,
  setIntervalInS,
  min = 1,
  max = 10,
}: Props) => {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        htmlFor="medium-range"
        className="block text-xs font-semibold tracking-normal text-neutral-300"
      >
        Interval ({intervalInS}s)
      </label>
      <input
        type="range"
        className="h-11 w-full cursor-pointer accent-neutral-300"
        value={intervalInS}
        min={min}
        max={max}
        step={1}
        onChange={(event) => setIntervalInS(parseInt(event.target.value, 10))}
      />
    </div>
  );
};
