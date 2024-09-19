import './index.css';
import Main from './Main';
import Expertise from './Expertise';
import Timeline from './Timeline';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Main></Main>
      <Expertise></Expertise>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
