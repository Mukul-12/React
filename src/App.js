import './App.css';
import Conditional from './Components/Conditional_rendering';
import ParentComponent from './Components/props use for inheritance/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Mukul' ><p>Learn React</p></Greet> */}
      {/* <LearnState /> */}
      {/* <Counter /> */}
      {/* <Click /> */}
      <ParentComponent />
      <Conditional />
    </div>
  );
}

export default App;
