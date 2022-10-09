import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import { Detail } from './pages/Detail';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Favorite } from '@mui/icons-material';
import { Search } from './components/Search/Search';
import { Leftbar } from './components/Leftbar/GenreTag/GenreTag';
// import Search from '../src/components/Search/Search'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={
          <>
          <Sidebar />
           <Home />
          <Leftbar />
          I</>
        } />
        <Route path='/:type/:id' element={ <Detail />} />
        <Route path='/fav' element={ <Favorite />} />
        <Route path='/search' element={ 
          <>
           <Sidebar />
           <Search />
          </>
        } />
      </Routes>
     
    </div>
  );
}

export default App;
