import './App.scss';
import Login from './components/Login/Login';
import Nav from './components/Navigation/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/ManageUsers/Users';
import _ from 'lodash';
import { useEffect, useState } from 'react';

const App = () => {
  const [account, setAccount] = useState({});

  useEffect(() => { 
    let session = sessionStorage.getItem('account');
    if (session) { 
      setAccount(JSON.parse(session));
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="app-container">
        { account && !_.isEmpty(account) && account.isAuthenticated
          && <Nav/>
        }
        
        <Routes>
        
          <Route exact path="/" element={'Home'} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/news" element={'News'} />
          <Route path="/contact" element={'Contact'} />
          <Route path="/about" element={'About'} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={'404 not found'} />
        
      </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </BrowserRouter>
    
  );
}

export default App;
