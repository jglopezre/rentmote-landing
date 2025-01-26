import { theme } from '@/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import styled, { keyframes } from 'styled-components';

type CountdownTimerProps = {
  targetTime: string,
};

const MILI_SECONDS = 1000;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledTimerWrapper = styled(Row)`
  background-color: ${({ theme }) => theme.colors.primary1};
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border: solid 1px gray;
  border-radius: 8px;
  width: 360px;
`;

const TimerUnits = styled(Col)`
  // text-align: center;
  
  // background-size: 300% 300%;
  // position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimerDigits = styled.p`
  font-family: 'Roboto Mono';
  font-weight: bolder;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.light};
  // background: linear-gradient(45deg, #ff6ec4, #7873f5, #57e2e5, #45f587);
  // background-size: 300% 300%;
  // background-clip: text;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // animation: ${gradient} 10s ease infinite;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const TimerWords = styled.p`
  font-family: Rubik;
  font-weight: 200;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.light};
`;

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTime }) => {
  const calculateTimeLeft = useCallback(() => {
    const target = new Date(targetTime).getTime();
    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [targetTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, MILI_SECONDS);

    return () => clearInterval(intervalId);
  }, [calculateTimeLeft]);

  return (
    <StyledTimerWrapper>
      <TimerUnits style={{ borderRight: `1px solid ${theme.colors.light}`}}>
        <TimerDigits>{timeLeft.days.toString().padStart(2, '0')}</TimerDigits>
        <TimerWords>Días</TimerWords>
      </TimerUnits>
      <TimerUnits style={{ borderRight: `1px solid ${theme.colors.light}`}}>
        <TimerDigits>{timeLeft.hours.toString().padStart(2, '0')}</TimerDigits>
        <TimerWords>Horas</TimerWords>
      </TimerUnits>
      <TimerUnits style={{ borderRight: `1px solid ${theme.colors.light}`}}>
        <TimerDigits>{timeLeft.minutes.toString().padStart(2, '0')}</TimerDigits>
        <TimerWords>Minutos</TimerWords>
      </TimerUnits>
      <TimerUnits>
        <TimerDigits>{timeLeft.seconds.toString().padStart(2, '0')}</TimerDigits>
        <TimerWords>Segundos</TimerWords>
      </TimerUnits>
    </StyledTimerWrapper>
  )
};

/*
@use "colors" as colors;

@mixin textGradient() {
  background: linear-gradient(45deg, #ff6ec4, #7873f5, #57e2e5, #45f587);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 5s ease infinite;
}

.countdownContainer {
  // background-color: colors.$white;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border: solid 1px colors.$textDark;
  border-radius: 8px;
  min-width: 360px;
  .countdownUnits {
    text-align: center;
    // background-color: colors.$white;
    // background-size: 300% 300%;
    // position: relative;
    overflow: hidden;
    border-right: solid 1px colors.$textLight;
    .digits {
      font-family: 'Barlow Condensed';
      font-weight: bolder;
      font-size: 4rem;
      color: colors.$textDark;
      // @include textGradient();
      // animation: gradient 10s ease infinite;
    }

    .words {
      font-family: Rubik;
      font-weight: 200;
      font-size: 0.7rem;
      color: colors.$textDark;
    }
  }
}

@keyframes gradient {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}

*/