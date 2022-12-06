import { useEffect, useState } from "react";



function useLocalStorage(value, localStorageKey) {
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem(localStorageKey)) || value
  );

  useEffect(() => {
    if (state) {
      window.localStorage.setItem(localStorageKey, JSON.stringify(state));
    } else {
      window.localStorage.removeItem(localStorageKey);
    }
  }, [localStorageKey, state])

  return [state, setState];
}

export default useLocalStorage;