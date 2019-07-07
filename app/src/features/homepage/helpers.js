import React from "react";
import { interval } from "rxjs";
export const useInterval = (callback, delay) => {
  // using set interval with useEffect https://overreacted.io/making-setinterval-declarative-with-react-hooks/

  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useLoopedInterval = (duration, total) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const sub = interval(duration).subscribe(e => setCurrent(e));
    return () => sub.unsubscribe();
  }, []);

  return current % total;
};
