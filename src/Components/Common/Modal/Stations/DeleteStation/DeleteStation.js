import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import {
  DELETE_STATION,
  GET_ALL_STATIONS,
} from "../../../../../shared/stations";
import "./deleteTrail.scss";

const DeleteStation = ({ isModalOpen, handleClose, id, reload }) => {
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

  const deleteStation = async () => {
    const status = await DELETE_STATION(stationId);

    if (status === 200) {
      reload();
      handleClose();
    }
  };

  const [name, setName] = useState();
  const [stationId, setStationId] = useState();

  const filterStation = () => {
    const filteredStation = id();

    setName(filteredStation[0].name);
    setStationId(filteredStation[0].id);
  };

  useEffect(() => {
    filterStation();
  }, []);

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
            Esti sigur ca vrei sa stergi statia {name}?
          </div>
          <div className="users--button delete--users--button">
            <button onClick={() => handleClose()}>Anuleaza</button>
            <button
              className="users--delete--button"
              onClick={() => deleteStation()}
            >
              Sterge
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteStation;
