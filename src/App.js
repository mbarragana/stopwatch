import { createGlobalStyle } from 'styled-components'
import StopWatch from './components/StopWatch/StopWatch';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <StopWatch />
    </div>
  );
}

export default App;
