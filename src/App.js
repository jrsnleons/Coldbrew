import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/about';
import Store from './pages/shop';



import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Store" element={<Store/>}/>
      </Routes>
    </Router>
  );
}

export default App;
