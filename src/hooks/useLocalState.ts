import { useEffect, useState } from "react";

type UpdateStateFn<T> = (state: T) => void;

const setToLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const retrieveFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (item === null) {
    return null;
  }

  return JSON.parse(item) as T;
};

const getInitialStateFromLocalStorage =
  <T>({ initialState, key }: { initialState: T; key: string }) =>
  () => {
    if (typeof window === "undefined") {
      return initialState;
    }
    return retrieveFromLocalStorage<T>(key) ?? initialState;
  };

export const useLocalState = <T>(
  initialState: T,
  key: string,
  shouldSync = true
): [T, UpdateStateFn<T>] => {
  const [state, setState] = useState<T>(
    getInitialStateFromLocalStorage({ initialState, key })
  );

  useEffect(() => {
    const handleStorageChangedMessage = (event: StorageEvent) => {
      if (!shouldSync) {
        return;
      }
      if (key !== event.key) {
        return;
      }
      if (event.newValue === null) {
        setState(initialState);

        return;
      }
      setState(JSON.parse(event.newValue) as T);
    };

    window.addEventListener("storage", handleStorageChangedMessage);

    return () =>
      window.removeEventListener("storage", handleStorageChangedMessage);
  }, [initialState, shouldSync]);

  const updateState = (newState: T) => {
    setState(newState);
    setToLocalStorage(key, newState);
  };

  return [state, updateState];
};
