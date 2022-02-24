import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  height: 24rem;
  min-width: 13rem;
  text-align: center;
`;

export const Display = styled.div`
  font-size: 2rem;
`;

export const LapsWrapper = styled.div`
  margin-top: 1.5rem;
  max-height: 18rem;
  overflow-y: auto;
`;

export const Lap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px darkgrey;
  color: grey;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  ${Display} {
    font-size: 1rem;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const ControlButton = styled.button`
  margin: 0 0.5rem;

  &:last-child {
    margin: 0;
  }

  ${({ isActive }) => isActive && css`
    background-color: red;
    color: white; 
  `}
`;

export const ControlStartButton = styled.button`
  min-width: 4rem; 

  ${({ isActive }) => isActive && css`
    background-color: red;
    color: white; 
  `}
`;