import './styles/App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<h2>Page not found</h2>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;