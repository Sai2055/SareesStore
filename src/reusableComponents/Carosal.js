import { useEffect, useState } from "react";

export const useCarosal = (prop) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % prop.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prop.length]);
  return current;
};
