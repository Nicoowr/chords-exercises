import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

type Props = {
  isPaused: boolean;
};

export const Stopwatch = ({ isPaused }: Props) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useInterval(
    () => {
      setElapsedSeconds(elapsedSeconds + 1);
    },
    isPaused ? null : 1000,
  );

  const minutes = Math.floor(elapsedSeconds / 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const seconds = elapsedSeconds - minutes * 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  const resetStopwatch = () => setElapsedSeconds(0);

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        htmlFor="medium-range"
        className="block text-xs font-semibold tracking-normal text-neutral-300"
      >
        Stopwatch
      </label>
      <div className="flex h-11 items-center gap-3 rounded-md border border-white/10 bg-neutral-900 px-3 shadow-inner shadow-black/20">
        <button
          type="button"
          aria-label="Reset stopwatch"
          className="rounded-md text-neutral-300 transition hover:text-white focus:ring-2 focus:ring-neutral-400 focus:outline-none"
          onClick={resetStopwatch}
        >
          <ArrowPathIcon className="h-6 w-6" />
        </button>
        <h2 className="text-3xl leading-none font-semibold text-white tabular-nums">
          {formattedMinutes}:{formattedSeconds}
        </h2>
      </div>
    </div>
  );
};
