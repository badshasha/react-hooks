import logo from './logo.svg';
import './App.css';
import FirstHook from './hooks/FirstHook';
import ReduceHook from './hooks/ReduceHook';
import UseEffect from './hooks/UseEffect';
import UseRef from './hooks/UseRef';
import UseImperative from './hooks/UseImperative';

function App() {
  return (
    <div className="App">
       {/* <FirstHook /> */}
       {/* <ReduceHook/> */}
       {/* <UseEffect /> */}
       {/* <UseRef/> */}
       <UseImperative />
    </div>
  );
}

export default App;
