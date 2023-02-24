import './App.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='sidebar__component'><Sidebar  /></div>
      <div className='outlet__component'><Outlet  /></div>
    </div>
  );
}

export default App;
