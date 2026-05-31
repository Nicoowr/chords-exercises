import { useEffect } from "react";

// addEventListener takes a function REFERENCE (https://stackoverflow.com/questions/67300190/exponential-re-rendering-with-eventlistener-on-state-update)
export const useKeyboardEventHandler = ({
  spaceKeyDownHandler,
}: {
  spaceKeyDownHandler: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        spaceKeyDownHandler();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [spaceKeyDownHandler]);
};
