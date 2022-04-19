import logo from './logo.svg';
import './App.css';
import FirstHook from './hooks/FirstHook';
import ReduceHook from './hooks/ReduceHook';


function App() {
  return (
    <div className="App">
       {/* <FirstHook /> */}
       <ReduceHook/>
    </div>
  );
}

export default App;
