import {KeyboardEvent, useEffect} from "react";

// addEventListener takes a function REFERENCE (https://stackoverflow.com/questions/67300190/exponential-re-rendering-with-eventlistener-on-state-update)
export const useKeyboardEventHandler = ({spaceKeyDownHandler}: {
    spaceKeyDownHandler: () => void
}) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        console.log(typeof spaceKeyDownHandler)
        if (event.code === "Space") {
            spaceKeyDownHandler()
        }
    }

    useEffect(() => {
        // @ts-expect-error: weird error: type 'KeyboardEvent' is not assignable to type 'KeyboardEvent<Element>'
        document.addEventListener("keydown", handleKeyDown);

        // @ts-expect-error: weird error: type 'KeyboardEvent' is not assignable to type 'KeyboardEvent<Element>'
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [spaceKeyDownHandler]);
}