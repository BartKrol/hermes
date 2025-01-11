import { useCallback, useEffect, useState } from "react";

type TimerProps = {
  targetDate?: string;
};

export default function useTimer({ targetDate }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = useCallback(() => {
    if (!targetDate) return;
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeLeft({ minutes: 0, seconds: 0 });
      return;
    }

    // Convert difference to minutes and seconds
    const totalMinutes = Math.floor(difference / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({
      minutes: totalMinutes,
      seconds,
    });
  }, [targetDate]);

  useEffect(() => {
    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [targetDate, calculateTimeLeft]);

  return {
    minutes:
      timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : `${timeLeft.minutes}`,
    seconds:
      timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : `${timeLeft.seconds}`,
  };
}
