import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import { Detail } from './pages/Detail';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={
          <>
          <Sidebar />
           <Home />
          I</>
        } />
        <Route path='/:id' element={ <Detail />} />
      </Routes>
    </div>
  );
}

export default App;
