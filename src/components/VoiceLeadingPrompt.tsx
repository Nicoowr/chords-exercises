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
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <h1 className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-3 text-center text-4xl font-extrabold tracking-tight text-white sm:text-7xl">
        <span className="text-yellow-500">{position}</span>
        <span className="text-cyan-300">
          {formatVoiceLeadingProgression(progression)}
        </span>
        <span className="text-red-400">{target.label}</span>
      </h1>
    </div>
  );
};
