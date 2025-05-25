import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import './App.css'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default App
