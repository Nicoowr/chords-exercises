import { useLocalState } from "./useLocalState";

export type Position = "1" | "2" | "3" | "4" | "5";
const DEFAULT_POSITIONS: Position[] = ["1", "2", "3", "4", "5"];
export const ALL_POSITIONS: Position[] = ["1", "2", "3", "4", "5"];

export const useAvailablePositions = () => {
  const [availablePositions, setAvailablePositions] = useLocalState<Position[]>(
    DEFAULT_POSITIONS,
    "positions"
  );

  return {
    availablePositions,
    setAvailablePositions,
  };
};
