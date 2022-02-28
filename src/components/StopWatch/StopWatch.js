import { useCallback, useEffect, useRef, useState } from 'react';

import { Container, Wrapper } from './styles';

import Timer from './Timer';
import Controls from './Controls';
import Laps from './Laps';
import { formatTime } from './helpers';

const TIME_INTERVAL = 10;

function StopWatch({ startTime = 0 }) {
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const timeIntervalRef = useRef();
  const displayTimeRef = useRef();
  const lapTimeRef = useRef(0);
  const timeRef = useRef(startTime);

  useEffect(() => {
    if (isActive) {
      timeIntervalRef.current = setInterval(() => {
        timeRef.current = timeRef.current + 10;
        lapTimeRef.current = lapTimeRef.current + 10;
        displayTimeRef.current.textContent = formatTime(timeRef.current)
      }, TIME_INTERVAL);
    } else {
      clearInterval(timeIntervalRef.current);
    }

    return () => {
      clearInterval(timeIntervalRef);
    }
  }, [isActive]);

  useEffect(() => {
    lapTimeRef.current = 0;
  }, [laps])


  const handleStartPause = (shouldPause = true) => {
    if (isActive) {
      setLaps((value) => [lapTimeRef.current, ...value]);
    }

    if (shouldPause) {
      setIsActive((value) => !value);
    }
  };

  const handleReset = useCallback(() => {
    timeRef.current = 0;
    setLaps([])
  }, []);

  return (
    <Container>
      <Wrapper>
        <Timer innerRef={displayTimeRef} time={timeRef.current} />
        <Controls
          isActive={isActive}
          isPaused={!isActive && !!timeRef.current}
          onStartPause={handleStartPause}
          onReset={handleReset}
        />
        <Laps laps={laps} />
      </Wrapper>
    </Container>
  )
}

export default StopWatch;