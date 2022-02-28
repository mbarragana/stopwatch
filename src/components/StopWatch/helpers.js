export function formatTime(time) {
  const hours = `0${Math.floor(time / 3600000 % 60 % 24)}`.slice(-2); 
  const minutes = `0${Math.floor(time / 60000 % 60)}`.slice(-2);
  const seconds = `0${Math.floor(time / 1000 % 60)}`.slice(-2);
  const centSeconds = `0${Math.floor(time / 10 % 1000)}`.slice(-2);

  return `${hours} : ${minutes} : ${seconds} . ${centSeconds}`;
}