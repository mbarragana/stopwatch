import { formatTime } from './helpers';
import { Display } from './styles';

function Timer({ innerRef, className, time }) {
  return (
    <Display className={className} ref={innerRef}>
      {formatTime(time)}
    </Display>
  )
}

export default Timer;