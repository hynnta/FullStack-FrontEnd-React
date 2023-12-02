import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Users = () => { 
    let Navigate = useNavigate();
    useEffect(() => { 
            let session = sessionStorage.getItem('account');
            if (!session) { 
                Navigate('/login');
            }
        }, [])

    return (
        

        <div>Users</div>
    )
}

export default Users;