import {useState} from "react";
import {useInterval} from "../hooks/useInterval";
import {ArrowPathIcon} from "@heroicons/react/24/outline";

type Props = {
    isPaused: boolean;
}

export const Stopwatch = ({isPaused}: Props) => {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useInterval(() => {
        setElapsedSeconds(elapsedSeconds + 1);
    }, isPaused ? null : 1000)

    const minutes = Math.floor(elapsedSeconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString()
    const seconds = elapsedSeconds - minutes * 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString()

    const resetStopwatch = () => setElapsedSeconds(0);

    return <div
        className="container  flex justify-end items-center px-4 py-16 columns-2">
        <ArrowPathIcon className="text-white h-8 mr-2" onClick={resetStopwatch}/>
        <h2 className="text-5xl font-extrabold text-white sm:text-[3rem]">{formattedMinutes}:{formattedSeconds}</h2>
    </div>
}