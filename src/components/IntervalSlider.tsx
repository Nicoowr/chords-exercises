type Props = {
  intervalInS: number;
  setIntervalInS: (intervalInMs: number) => void;
};

export const IntervalSlider = ({ intervalInS, setIntervalInS }: Props) => {
  return (
    <div className="m-2 flex h-12 w-72 flex-col">
      <label
        htmlFor="medium-range"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Interval ({intervalInS}s)
      </label>
      <input
        type="range"
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-cyan-500"
        value={intervalInS}
        min={1}
        max={10}
        step={1}
        onChange={(event) => setIntervalInS(parseInt(event.target.value, 10))}
      />
    </div>
  );
};
