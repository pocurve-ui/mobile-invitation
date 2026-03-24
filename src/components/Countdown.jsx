import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // 1초 단위로 업데이트
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-center gap-1 sm:gap-2 mt-1 mb-0 relative z-20 w-full max-w-sm mx-auto">
      <FlipCard digit={timeLeft.days} label="days" />
      <FlipCard digit={timeLeft.hours} label="hrs." />
      <FlipCard digit={timeLeft.minutes} label="mins." />
      <FlipCard digit={timeLeft.seconds} label="secs." />
    </div>
  );
}
