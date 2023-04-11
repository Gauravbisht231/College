import './App.css';
import Abovenavbar from './components/Abovenavbar';
import Crioresults from './components/Crioresults';
import Colleges from './components/Colleges';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App ">
      <div><Abovenavbar/></div>
      <div><Navbar/></div>
      <div><Intro/></div>
      <div><Colleges/></div>
      <div> <Crioresults/></div>
    </div>
  );
}

export default App;
