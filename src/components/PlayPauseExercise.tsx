import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { memo } from "react";

type PlayPauseProps = {
  isPaused: boolean;
  startStopPermutation: () => void;
};

const PlayPauseExercise = memo(
  ({ isPaused, startStopPermutation }: PlayPauseProps) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          aria-label={isPaused ? "Start exercise" : "Pause exercise"}
          className="rounded-full border border-white/15 bg-white px-4 py-4 text-neutral-950 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:outline-none"
          onClick={startStopPermutation}
        >
          {isPaused ? (
            <PlayCircleIcon className="h-14 w-14" />
          ) : (
            <PauseCircleIcon className="h-14 w-14" />
          )}
        </button>
      </div>
    );
  },
);

PlayPauseExercise.displayName = "PlayPause";

export { PlayPauseExercise };
