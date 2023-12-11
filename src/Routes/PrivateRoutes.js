import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const PrivateRoutes = (props) => { 
    let Navigate = useNavigate();
    useEffect(() => { 
            let session = sessionStorage.getItem('account');
            if (!session) { 
                Navigate('/login');
        }
        if (session) { 
            //check role
        }
    }, [])
    
    return (
            <Route path={ props.path } component={props.component} />
    )
}

export default PrivateRoutes;