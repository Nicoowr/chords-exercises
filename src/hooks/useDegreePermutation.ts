import {useCallback, useState} from "react";
import {useInterval} from "./useInterval";
import {Chord} from "./useAvailableChords";
import {Degree} from "./useAvailableDegrees";


const INTERVAL_MS = 5000;

function getRandomElement<T>(array: T[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex] as T;
}

export const useDegreePermutation = ({availableDegrees, availableChords}: {availableChords: Chord[], availableDegrees: Degree[]}) => {
    const [chordDegree, setChordDegree] = useState<string>("I");
    const [noteDegree, setNoteDegree] = useState<number>(1);
    const [isPaused, setIsPaused] = useState(true);

    const startStopPermutation = useCallback(() => {
        setIsPaused(!isPaused)
    }, [setIsPaused, isPaused]);

    useInterval(() => {
        const randomChordDegree = getRandomElement(availableChords)
        const randomNoteDegree = getRandomElement(availableDegrees)
        setChordDegree(randomChordDegree)
        setNoteDegree(randomNoteDegree)
    }, isPaused ? null : INTERVAL_MS)

    return {
        startStopPermutation,
        chordDegree,
        noteDegree,
        isPaused,
    }
}