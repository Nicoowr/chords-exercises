import {useState} from "react";

export type Degree = 1 | 2 | 3 | 4 | 5 | 6 | 7
const DEFAULT_DEGREES: Degree[] = [1, 3, 5, 7]

export const useAvailableDegrees = () => {
    const [availableDegrees, setAvailableDegrees] = useState<Degree[]>(DEFAULT_DEGREES)

    return {
        availableDegrees,
        setAvailableDegrees
    }

}