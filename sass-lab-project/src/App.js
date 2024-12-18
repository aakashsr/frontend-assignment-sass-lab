import logo from './logo.svg';
import './App.css';
import ProjectSummary from './ProjectSummary/ProjectSummary';

function App() {
  
  return (
    <div className="App">
     <ProjectSummary maxCount={5}/>
    </div>
  );
}

export default App;
