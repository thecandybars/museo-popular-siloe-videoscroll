import { useEffect, useRef, useState } from "react";

interface WheelCounterProps {
  step?: number;
  resolution?: number;
  scale?: number;
}

export default function useWheelCounter(props?: WheelCounterProps) {
  const step = props?.step || 1;
  const resolution = props?.resolution || 1; // This value controls how many wheel units are needed to change the counter
  const scale = props?.scale || 1;
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const wheelDeltaRef = useRef(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      //   event.preventDefault();
      event.stopPropagation();
      wheelDeltaRef.current += event.deltaY;

      // When the accumulated delta reaches the threshold, adjust the count
      if (wheelDeltaRef.current >= resolution) {
        setDirection("up");
        setCount((prevCount) => prevCount + step);
        wheelDeltaRef.current = 0; // Reset the accumulated delta
      } else if (wheelDeltaRef.current <= -resolution) {
        setDirection("down");
        setCount((prevCount) => prevCount - step);
        wheelDeltaRef.current = 0; // Reset the accumulated delta
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [resolution, step]);

  return { frame: count / scale, direction };
}
