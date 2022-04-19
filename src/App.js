import logo from './logo.svg';
import './App.css';
import FirstHook from './hooks/FirstHook';
import ReduceHook from './hooks/ReduceHook';
import UseEffect from './hooks/UseEffect';
import UseRef from './hooks/UseRef';


function App() {
  return (
    <div className="App">
       {/* <FirstHook /> */}
       {/* <ReduceHook/> */}
       {/* <UseEffect /> */}
       <UseRef/>
    </div>
  );
}

export default App;
