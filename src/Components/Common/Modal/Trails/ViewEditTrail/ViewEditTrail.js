import { Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./viewEditTrail.scss";

const ViewEditTrail = ({ isModalOpen, handleClose, isEdit, trail }) => {
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

  const [name, setName] = useState(trail && `Linia ${trail}`);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "name") {
      setName(value);
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
            {isEdit ? `Editeaza linia ${trail}` : `Linia ${trail}`}
          </div>
          <div className="users--inputs">
            <TextField
              name="name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <div className="users--button">
              <button onClick={() => handleClose()}>
                {isEdit ? "Editeaza" : "Inchide"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewEditTrail;
