import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../services/userService";


const Users = () => { 
    
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => { 
        fetchUsers();
        
    }, [])
    
    const fetchUsers = async () => { 
        let response = await fetchAllUsers();
        
        if (response && response.data && response.data.EC === 0) { 
            setListUsers(response.data.DT);
            console.log('check data: ', response.data.DT)
        }
    }

    return (
        <>
            <div className="container">
        <div className="manage-users-container">
                <div className="users-header">
                    <div className="title"><h3>List Users</h3></div>
                    <div className="actions">
                        <button className="btn btn-success">Refresh</button>
                        <button className="btn btn-primary">Add new user</button>
                    </div>
            </div>
        </div>
        
        <table className="table table-bordered table-hover">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Group</th>
            </tr>
        </thead>
        <tbody>
                        {listUsers && listUsers.length > 0 ?
                            <>
                                {listUsers.map((item, index) => { 
                                    return (
                                        <tr key={`row-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.username}</td>
                                            <td>{item.Group ? item.Group.name : '' }</td>
                                        </tr>
                                    )
                                })}
                            </> 
                            :
                            <><span>Not found users</span></>
                            }
        </tbody>
            </table>
            </div>
            </>
    )
}

export default Users;