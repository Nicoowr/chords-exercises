import { RangeSlider } from "flowbite-react";

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
      <RangeSlider
        className="flex h-full w-full items-center"
        value={intervalInS}
        min={1}
        max={10}
        step={1}
        onChange={(event) => setIntervalInS(parseInt(event.target.value, 10))}
      />
    </div>
  );
};
