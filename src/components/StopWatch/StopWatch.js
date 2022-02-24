import { useCallback, useEffect, useRef, useState } from 'react';

import { Container, Wrapper } from './styles';

import Timer from './Timer';
import Controls from './Controls';
import Laps from './Laps';

const TIME_INTERVAL = 10;

function StopWatch({ startTime = 0 }) {
  const [time, setTime] = useState(startTime);
  const [isActive, setIsActive] = useState(false);
  const [lap, setLap] = useState(0);
  const [laps, setLaps] = useState([]);
  const timeIntervalRef = useRef();

  useEffect(() => {
    if (isActive) {
      timeIntervalRef.current = setInterval(() => {
        setTime((value) => {
          console.log('>>>>> entre`', value);
          return value + TIME_INTERVAL
        });
        setLap((value) => value + TIME_INTERVAL)
      }, TIME_INTERVAL);
    } else {
      clearInterval(timeIntervalRef.current);
    }

    return () => {
      clearInterval(timeIntervalRef);
    }
  }, [isActive]);


  const handleStartPause = (shouldPause = true) => {
    if (isActive) {
      setLaps((value) => [lap, ...value]);
      setLap(0);
    }

    if (shouldPause) {
      setIsActive((value) => !value);
    }
  };

  const handleReset = useCallback(() => {
    setTime(0);
    setLaps([])
  }, []);

  console.log('>>> time', time);
  return (
    <Container>
      <Wrapper>
        <Timer time={time} />
        <Controls
          isActive={isActive}
          isPaused={!isActive && !!time}
          onStartPause={handleStartPause}
          onReset={handleReset}
        />
        <Laps laps={laps} />
      </Wrapper>
    </Container>
  )
}

export default StopWatch;