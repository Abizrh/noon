import "./App.css";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Favorite } from "./pages/Favorite";
import { Search } from "./components/Search/Search";
import { Reminder } from "./pages/Reminder";
import { Playlist } from "./pages/Playlist";
import { Live } from "./pages/Live";
import { Setting } from "./pages/Setting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Home />I
            </>
          }
        />

        <Route
          path="/favorite"
          element={
            <>
              <Sidebar />
              <Favorite />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Sidebar />
              <Search />
            </>
          }
        />
        <Route
          path="/reminder"
          element={
            <>
              <Sidebar />
              <Reminder />
            </>
          }
        />
        <Route
          path="/playlist"
          element={
            <>
              <Sidebar />
              <Playlist />
            </>
          }
        />
        <Route
          path="/live"
          element={
            <>
              <Sidebar />
              <Live />
            </>
          }
        />
        <Route
          path="/setting"
          element={
            <>
              <Sidebar />
              <Setting />
            </>
          }
        />
        <Route path="/:type/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
