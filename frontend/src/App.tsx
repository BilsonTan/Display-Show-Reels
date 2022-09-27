import SelectClips from "./components/CreateReel/SelectClips";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DecideReel from "./components/CreateReel/DecideReel";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/create-reel" element={<DecideReel />} />
          <Route path="/select-clips" element={<SelectClips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
