import {PauseCircleIcon, PlayCircleIcon} from "@heroicons/react/24/outline";
import {memo} from "react";

type PlayPauseProps = {
    isPaused: boolean;
    startStopPermutation: () => void
}

const PlayPause = memo(({isPaused, startStopPermutation}: PlayPauseProps) => {
    return <div>
        {isPaused ?
            <PlayCircleIcon className="h-16 w-16 text-amber-50"
                            onClick={startStopPermutation}/> :
            <PauseCircleIcon className="h-16 w-16 text-amber-50"
                             onClick={startStopPermutation}/>}
    </div>
})

PlayPause.displayName = "PlayPause"

export {PlayPause}