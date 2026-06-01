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
        <span className="text-neutral-100">{position}</span>
        <span className="[text-wrap:balance] text-neutral-300">
          {formatVoiceLeadingProgression(progression)}
        </span>
        <span className="text-neutral-100">{target.label}</span>
      </h1>
    </div>
  );
};
