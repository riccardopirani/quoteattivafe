import { useState, useEffect } from "react";

/**
 * Hook personalizzato per il debouncing
 * @param {any} value - Il valore da debounzare
 * @param {number} delay - Il delay in millisecondi
 * @returns {any} - Il valore debounzato
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
