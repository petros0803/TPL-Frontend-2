import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import "./deleteUser.scss";
import { DELETE_USER } from "../../../../shared/users";

const DeleteUser = ({ isModalOpen, handleClose, id, reload }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "1px solid #5603ad",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const [name, setName] = useState();
  const [userId, setUserId] = useState();

  const filterUsers = () => {
    const filteredUser = id();

    setName(filteredUser[0].name);
    setUserId(filteredUser[0].id);
  };

  useEffect(() => {
    filterUsers();
  }, []);

  const deleteUser = async () => {
    const status = await DELETE_USER(userId);

    if (status === 204) {
      reload();
      handleClose();
    }
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="user--modal--container"
      >
        <Box sx={style}>
          <div className="users--title">
            Esti sigur ca vrei sa stergi utilizatorul {name} ?
          </div>
          <div className="users--button delete--users--button">
            <button onClick={() => handleClose()}>Anuleaza</button>
            <button
              className="users--delete--button"
              onClick={() => deleteUser()}
            >
              Sterge
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteUser;
