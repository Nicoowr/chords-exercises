import { useLocalState } from "./useLocalState";
import { ALL_POSITIONS, Position } from "./useAvailablePositions";

export type Degree = "1" | "2" | "3" | "4" | "5" | "6" | "7";
const DEFAULT_DEGREES: Degree[] = ["1", "3", "5", "7"];
export const ALL_DEGREES: Degree[] = ["1", "2", "3", "4", "5", "6", "7"];

export const sortDegrees = (degrees: Degree[]) => {
  return degrees.slice().sort((a, b) => {
    const indexA = ALL_DEGREES.indexOf(a);
    const indexB = ALL_DEGREES.indexOf(b);

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

export const useAvailableDegrees = () => {
  const [availableDegrees, setAvailableDegrees] = useLocalState<Degree[]>(
    DEFAULT_DEGREES,
    "degrees"
  );

  return {
    availableDegrees,
    setAvailableDegrees,
  };
};
