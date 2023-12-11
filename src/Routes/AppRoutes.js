import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Users from "../components/ManageUsers/Users";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = (props) => { 
    return (
      <>
        
        <Routes>
          <Route path="/users" element={<Users />} />
        
          <Route exact path="/" element={'Home'} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/news" element={'News'} />
          <Route path="/contact" element={'Contact'} />
          <Route path="/about" element={'About'} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={'404 not found'} />
        
        </Routes>
        </>
    )
}
export default AppRoutes;