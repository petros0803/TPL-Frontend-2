import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./deleteTrail.scss";

const DeleteTrail = ({ isModalOpen, handleClose, trail }) => {
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
            Esti sigur ca vrei sa stergi linia {trail}?
          </div>
          <div className="users--button delete--users--button">
            <button onClick={() => handleClose()}>Anuleaza</button>
            <button className="users--delete--button">Sterge</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteTrail;
