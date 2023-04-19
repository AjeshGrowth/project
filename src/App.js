/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import Programs from "./Components/Pages/Programs";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App bg-white h-[100vh]">
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/program" element={<Programs/>}/>
          <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
