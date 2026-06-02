import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { memo } from "react";

type NextExerciseProps = {
  disabled?: boolean;
  onNext: () => void;
};

const NextExercise = memo(({ disabled = false, onNext }: NextExerciseProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        aria-label="Next exercise"
        className="flex items-center gap-3 rounded-md border border-white/15 bg-neutral-100 px-7 py-4 text-2xl font-semibold text-neutral-950 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-neutral-100"
        disabled={disabled}
        onClick={onNext}
      >
        <span>Next</span>
        <ArrowRightCircleIcon className="h-9 w-9" />
      </button>
    </div>
  );
});

NextExercise.displayName = "NextExercise";

export { NextExercise };
