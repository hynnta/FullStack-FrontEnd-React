import axios from "axios"

const registerNewUser = (email, username, phone, password) => { 
    return axios.post('http://localhost:8080/api/v1/register', {
            email, username, phone, password
        })
}

const loginUser = (valueLogin, password) => { 
    return axios.post('http://localhost:8080/api/v1/login', {
        valueLogin, password
    })
}

const fetchAllUsers = () => { 

    return axios.get('http://localhost:8080/api/v1/users/read')
}

const DeleteUser = (user) => { 
    return axios.delete("http://localhost:8080/api/v1/users/delete", { data: {id: user.id} });
}
export { registerNewUser, loginUser, fetchAllUsers, DeleteUser };