import { useLocalState } from "./useLocalState";

export type Degree = "1" | "2" | "3" | "4" | "5" | "6" | "7";
const DEFAULT_DEGREES: Degree[] = ["1", "3", "5", "7"];
export const ALL_DEGREES: Degree[] = ["1", "2", "3", "4", "5", "6", "7"];

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
