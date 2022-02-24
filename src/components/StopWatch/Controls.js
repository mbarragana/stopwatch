import { memo } from 'react';

import { ControlsWrapper, ControlButton, ControlStartButton } from './styles';

function Controls({ isActive, isPaused, onStartPause, onReset }) {
  return (
    <ControlsWrapper>
      <ControlStartButton onClick={onStartPause} isActive={isActive}>
        {isActive ? 'Pause' : 'Start'}
      </ControlStartButton>
      <div>
        <ControlButton onClick={onReset} disabled={!isPaused}>
          Reset
        </ControlButton>
        <ControlButton onClick={() => onStartPause(false)} disabled={!isActive}>
          Lap
        </ControlButton>
      </div>
    </ControlsWrapper>
  )
}

export default memo(Controls);