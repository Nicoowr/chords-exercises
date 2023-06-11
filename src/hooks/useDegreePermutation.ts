import {useCallback, useEffect, useMemo, useState} from "react";
import {useInterval} from "~/hooks/useInterval";

const AVAILABLE_CHORDS = ["I", "IV", "V", "vi"]
const AVAILABLE_NOTES = [1, 3, 5, 7]
const INTERVAL_MS = 5000;

function getRandomElement<T>(array: T[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex] as T;
}

export const useDegreePermutation = () => {
    const [chordDegree, setChordDegree] = useState<string>("I");
    const [noteDegree, setNoteDegree] = useState<number>(1);
    const [isPaused, setIsPaused] = useState(true);

    const startStopPermutation = useCallback(() => {
        setIsPaused(!isPaused)
    }, [setIsPaused, isPaused]);

    useInterval(() => {
        const randomChordDegree = getRandomElement(AVAILABLE_CHORDS)
        const randomNoteDegree = getRandomElement(AVAILABLE_NOTES)
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