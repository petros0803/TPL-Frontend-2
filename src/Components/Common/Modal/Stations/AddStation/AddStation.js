import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ADD_STATION } from "../../../../../shared/stations";
import "./addTrail.scss";

const AddStation = ({ isModalOpen, handleClose, reload }) => {
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
  const [isStationCoverd, setIsStationCoverd] = useState();
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "lng") {
      setLng(value);
    } else if (name === "lat") {
      setLat(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const handleChangeSelect = (event) => {
    setIsStationCoverd(event.target.value);
  };

  const addStation = async (e) => {
    e.preventDefault();

    const status = await ADD_STATION(name, isStationCoverd, lat, lng);

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
          <div className="users--title">Adauga o statie noua</div>
          <div className="users--inputs">
            <TextField
              name="name"
              id="outlined-basic"
              label="Nume"
              variant="outlined"
              value={name ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Statie acoperita
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={isStationCoverd}
                label="Statie acoperita"
                onChange={handleChangeSelect}
              >
                <MenuItem value={1}>Da</MenuItem>
                <MenuItem value={0}>Nu</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="lat"
              id="outlined-basic"
              label="Latitudine"
              variant="outlined"
              value={lat ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <TextField
              name="lng"
              id="outlined-basic"
              label="Longitudine"
              variant="outlined"
              value={lng ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <div className="users--button">
              <button onClick={(e) => addStation(e)}>Adauga</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddStation;
