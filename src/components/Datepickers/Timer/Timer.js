import React, { useState, useMemo, useEffect } from 'react';
// import {useDispatch } from 'react-redux';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import { Days, TimerWrapper, Numbers, Delimeter } from './Timer.styled';
// import { countDays } from '../../../redux/books/books-operations';

export const Timer = ({ deadline, startdate }) => {
  // const dispatch = useDispatch();
  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = useState(new Date(startdate));

  const diffInSeconds = differenceInSeconds(deadline, currentTime);

  const getCoundown = () => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor(
      (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
    );
    const seconds =
      diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const countdown = useMemo(getCoundown, [ONE_DAY, ONE_HOUR, diffInSeconds]);
  // dispatch(countDays(countdown.days));

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);

    // return () => {
    //   // cancel the subscription
    //   setInterval = false;
    // };
  }, []);

  return (
    <TimerWrapper>
      <Days>
        <Numbers>{countdown.days}</Numbers> ДН
      </Days>
      <Delimeter>:</Delimeter>
      <Days>
        <Numbers>{countdown.hours}</Numbers> ГОД
      </Days>
      <Delimeter>:</Delimeter>
      <Days>
        <Numbers>{countdown.minutes}</Numbers> ХВ
      </Days>
      <Delimeter>:</Delimeter>

      <Days>
        <Numbers>{countdown.seconds}</Numbers>СЕК
      </Days>
    </TimerWrapper>
  );
};
