import React, { useState, useEffect } from "react";
import { Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./viewEditUser.scss";
import { EDIT_USER } from "../../../../shared/users";

const ViewEditUser = ({ isModalOpen, handleClose, isEdit, id, reload }) => {
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
  const [name, setName] = useState();
  const [userId, setUserId] = useState();

  const filterUsers = () => {
    const filteredUser = id();

    setName(filteredUser[0].name);
    setEmail(filteredUser[0].email);
    setUserId(filteredUser[0].id);
  };

  useEffect(() => {
    filterUsers();
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "email") {
      setEmail(value);
    } else {
      setName(value);
    }
  };

  const submitUser = async () => {
    const status = await EDIT_USER(userId, name, email);

    if (status === 200) {
      reload();
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
            {isEdit ? `Editeaza utilizatorul ${name}` : `Utilizatorul ${name}`}
          </div>
          <div className="users--inputs">
            <TextField
              disabled={isEdit ? false : true}
              name="name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <TextField
              disabled={isEdit ? false : true}
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <div className="users--button">
              <button onClick={() => (isEdit ? submitUser() : handleClose())}>
                {isEdit ? "Editeaza" : "Inchide"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewEditUser;
