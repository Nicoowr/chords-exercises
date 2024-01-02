import { useLocalState } from "./useLocalState";

export type Position = "1" | "2" | "3" | "4" | "5";
const DEFAULT_POSITIONS: Position[] = ["1", "2", "3", "4", "5"];
export const ALL_POSITIONS: Position[] = ["1", "2", "3", "4", "5"];

export const sortPositions = (positions: Position[]) => {
  return positions.slice().sort((a, b) => {
    const indexA = ALL_POSITIONS.indexOf(a);
    const indexB = ALL_POSITIONS.indexOf(b);

    if (indexA == -1 || indexB == -1) {
      throw new Error(
        "Elements in the list are not present in the reference list"
      );
    }

    if (indexA < indexB) {
      return -1;
    }

    if (indexA > indexB) {
      return 1;
    }

    return 0;
  });
};

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
