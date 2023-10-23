import './App.scss';
import Login from './components/Login/Login';
import Nav from './components/Navigation/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav/>
        <Routes>
        
          <Route exact path="/" element={'Home'} />
          <Route path="/login" element={<Login/>} />
          <Route path="/news" element={'News'} />
          <Route path="/contact" element={'Contact'} />
          <Route path="/about" element={'About'} />
          <Route path="*" element={'404 not found'} />
        
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
