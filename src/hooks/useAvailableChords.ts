import {useState} from "react";

export type Chord = "I" |"ii" | "iii" |"IV"| "V"| "vi"
const DEFAULT_CHORDS: Chord[] = ["I", "IV", "V", "vi"]
export const ALL_CHORDS: Chord[] = ["I" ,"ii" , "iii" ,"IV", "V", "vi"]

export const useAvailableChords = () => {
    const [availableChords, setAvailableChords] = useState<Chord[]>(DEFAULT_CHORDS)

    return {
        availableChords,
        setAvailableChords
    }
}