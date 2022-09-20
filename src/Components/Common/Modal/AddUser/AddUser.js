import { Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ADD_USER } from "../../../../shared/users";
import "./addUser.scss";

const AddUser = ({ isModalOpen, handleClose, reload }) => {
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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setName(value);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();

    const status = await ADD_USER(name, email, password);

    if (status === 201) {
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
          <div className="users--title">Adauga utilizator</div>
          <div className="users--inputs">
            <TextField
              name="name"
              id="outlined-basic"
              label="Nume"
              variant="outlined"
              value={name ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <TextField
              name="password"
              id="outlined-basic"
              label="Parola"
              variant="outlined"
              value={password ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <TextField
              name="passwordConfirm"
              id="outlined-basic"
              label="Repetati parola"
              variant="outlined"
              value={passwordConfirm ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <div className="users--button">
              <button onClick={(e) => addUser(e)}>Adauga</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUser;
