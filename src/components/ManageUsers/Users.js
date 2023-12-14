import { useEffect, useState } from "react";
import { DeleteUser, fetchAllUsers } from "../../services/userService";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import ModalDelete from "./ModalDelete";

const Users = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataModal, setDataModal] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    let response = await fetchAllUsers();

    if (response && response.data && response.data.EC === 0) {
      setListUsers(response.data.DT);
      // console.log("check data: ", response.data.DT);
    }
  };

  const handleDeleteUser = async (user) => {
    setDataModal(user);
    setShowModalDelete(true);
  };

  const handleClose = () => {
    setShowModalDelete(false);
    setDataModal({});
  };

  const confirmDeleteUser = async () => {
    let response = await DeleteUser(dataModal);
    if (response && response.data.EC === 0) {
      toast.success(response.data.EM);
      setShowModalDelete(false);
      await fetchUsers();
    } else {
      toast.error(response.data.EM);
    }
  };

  const handlePageClick = (event) => {
    alert(event.selected + 1);
  };
  return (
    <>
      <div className="container">
        <div className="manage-users-container">
          <div className="users-header">
            <div className="title">
              <h3>List Users</h3>
            </div>
            <div className="actions">
              <button className="btn btn-success">Refresh</button>
              <button className="btn btn-primary">Add new user</button>
            </div>
          </div>
          <div className="users-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Group</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listUsers && listUsers.length > 0 ? (
                  <>
                    {listUsers.map((item, index) => {
                      return (
                        <tr key={`row-${index}`}>
                          <td>{index + 1}</td>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>{item.Group ? item.Group.name : ""}</td>
                          <td>
                            <button className="btn btn-warning mx-2">
                              Edit
                            </button>
                            <button
                              className="btn btn-danger mx-2"
                              onClick={() => handleDeleteUser(item)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <tr>
                      <td>Not found users</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <>
              <ModalDelete
                show={showModalDelete}
                handleClose={handleClose}
                confirmDeleteUser={confirmDeleteUser}
                dataModal={dataModal}
              />
            </>
          </div>
          <div className="users-footer">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={50}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
