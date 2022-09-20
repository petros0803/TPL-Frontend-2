import React, { useState, useEffect } from "react";
import { USERS } from "./users.dummy-data";
import "./users.scss";
import TRASH from "../../../Assets/Icons/trash.svg";
import EDIT from "../../../Assets/Icons/edit.svg";
import EYE from "../../../Assets/Icons/eye.svg";
import AddUser from "../../Common/Modal/AddUser/AddUser";
import ViewEditUser from "../../Common/Modal/ViewEditUser/ViewEditUser";
import DeleteUser from "../../Common/Modal/DeleteUser/DeleteUser";
import { GET_ALL_USERS } from "../../../shared/users";

const Users = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isViewUserOpen, setIsViewUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false);
  const [userToModify, setUserToModify] = useState();
  const [users, setUsers] = useState();
  const [refresh, setRefresh] = useState(false);

  const getUsers = async () => {
    const usersBE = await GET_ALL_USERS();
    setUsers(usersBE);
  };

  useEffect(() => {
    getUsers();
  }, [refresh]);

  const closeIsAddUser = () => {
    setIsAddUserOpen(false);
  };

  const closeViewEditStationModal = () => {
    setIsEditUserOpen(false);
    setIsViewUserOpen(false);
  };

  const closeIsDeleteUser = () => {
    setIsDeleteUserOpen(false);
  };

  const getUserById = () => {
    return users.filter((user) => user.id === userToModify);
  };

  const reloadUsers = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="users--container">
      <div className="users--title">Utilizatori</div>
      <div className="users--button">
        <button onClick={() => setIsAddUserOpen(true)}>Adauga user</button>
      </div>
      <table className="users--table">
        <thead>
          <tr>
            <td>Nume</td>
            <td>Adresa de email</td>
            <td style={{ textAlign: "center" }}>Actiuni</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td style={{ textAlign: "center" }}>
                <img
                  src={EYE}
                  alt="vizualizeaza"
                  onClick={() => {
                    setUserToModify(user.id);
                    setIsViewUserOpen(true);
                  }}
                />
                <img
                  src={EDIT}
                  alt="editeaza"
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setUserToModify(user.id);
                    setIsEditUserOpen(true);
                  }}
                />
                <img
                  src={TRASH}
                  alt="sterge"
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setUserToModify(user.id);
                    setIsDeleteUserOpen(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddUserOpen && (
        <AddUser
          isModalOpen={isAddUserOpen}
          handleClose={closeIsAddUser}
          reload={reloadUsers}
        />
      )}
      {(isViewUserOpen || isEditUserOpen) && (
        <ViewEditUser
          isModalOpen={isViewUserOpen || isEditUserOpen}
          handleClose={closeViewEditStationModal}
          isEdit={isViewUserOpen ? false : true}
          reload={reloadUsers}
          id={getUserById}
        />
      )}

      {isDeleteUserOpen && (
        <DeleteUser
          isModalOpen={isDeleteUserOpen}
          handleClose={closeIsDeleteUser}
          reload={reloadUsers}
          id={getUserById}
        />
      )}
    </div>
  );
};

export default Users;
