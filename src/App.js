import './App.css';
import Conditional from './Components/Conditional_rendering';
import List from './Components/List_Rendering/List_Rendering';
import Object from './Components/List_Rendering/Object_rendering';
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
      <List />
      <Object />
    </div>
  );
}

export default App;
