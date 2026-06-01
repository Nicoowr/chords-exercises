import {
  formatVoiceLeadingProgression,
  type VoiceLeadingProgression,
  type VoiceLeadingTarget,
} from "../data/voiceLeading";
import { type Position } from "../hooks/useAvailablePositions";

type Props = {
  position: Position;
  progression: VoiceLeadingProgression;
  target: VoiceLeadingTarget;
};

export const VoiceLeadingPrompt = ({
  position,
  progression,
  target,
}: Props) => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center px-2 py-10">
      <h1 className="flex flex-wrap items-baseline justify-center gap-x-7 gap-y-4 text-center text-5xl font-black tracking-normal text-white sm:text-7xl lg:text-8xl">
        <span className="text-amber-200/90">{position}</span>
        <span className="[text-wrap:balance] text-sky-200/90">
          {formatVoiceLeadingProgression(progression)}
        </span>
        <span className="text-rose-200/90">{target.label}</span>
      </h1>
    </div>
  );
};
