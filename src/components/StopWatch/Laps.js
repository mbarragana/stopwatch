import { memo } from 'react';

import { LapsWrapper, Lap } from './styles';
import Timer from './Timer';

function Laps({ laps }) {
  return (
    <LapsWrapper>
      {laps.map((lap, index) => (
        <Lap key={`${lap}-${index}`}>
          {laps.length - index}
          <Timer time={lap} />
        </Lap>
      ))}
    </LapsWrapper>
  )
}

export default memo(Laps);