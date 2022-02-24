import { Display } from './styles';

function Timer({ className, time, interval = 10 }) {
  const hours = `0${Math.floor(time / 3600000 % 60 % 24)}`.slice(-2); 
  const minutes = `0${Math.floor(time / 60000 % 60)}`.slice(-2);
  const seconds = `0${Math.floor(time / 1000 % 60)}`.slice(-2);
  const centSeconds = `0${Math.floor(time / 10 % 1000)}`.slice(-2);

  return (
    <Display className={className}>
      {hours} : {minutes} : {seconds} . {centSeconds}
    </Display>
  )
}

export default Timer;