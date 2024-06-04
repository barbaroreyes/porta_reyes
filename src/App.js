
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Routes ,Route} from  'react-router-dom'
import Projects from './pages/Projects';

function App() {
  return (
    <div className="container_app">
    <Header/>
    <Routes>
      <Route path="/"  element={<Main/>} />
      <Route path="/projects"  element={<Projects/>} />

    </Routes>
   
    </div>
  );
}

export default App;
