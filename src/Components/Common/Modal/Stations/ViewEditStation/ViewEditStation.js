import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import "./viewEditTrail.scss";
import { EDIT_STATION } from "../../../../../shared/stations";

const ViewEditStation = ({ isModalOpen, handleClose, isEdit, id, reload }) => {
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
  const [stationId, setStationId] = useState();

  const filterStation = () => {
    const filteredStation = id();
    const coordinates = filteredStation[0].coordinates.split(", ");

    setName(filteredStation[0].name);
    setIsStationCoverd(+filteredStation[0].covered);
    setLat(coordinates[0]);
    setLng(coordinates[1]);
    setStationId(filteredStation[0].id);
  };

  useEffect(() => {
    filterStation();
  }, []);

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

  const submitStation = async () => {
    const status = await EDIT_STATION(
      stationId,
      name,
      isStationCoverd,
      lat,
      lng
    );

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
            {isEdit ? `Editeaza statia ${name}` : `Statia ${name}`}
          </div>
          <div className="users--inputs">
            <TextField
              disabled={isEdit ? false : true}
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
                disabled={isEdit ? false : true}
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
              disabled={isEdit ? false : true}
              name="lat"
              id="outlined-basic"
              label="Latitudine"
              variant="outlined"
              value={lat ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <TextField
              disabled={isEdit ? false : true}
              name="lng"
              id="outlined-basic"
              label="Longitudine"
              variant="outlined"
              value={lng ?? ""}
              onChange={(event) => handleChange(event)}
            />
            <div className="users--button">
              <button
                onClick={() => (isEdit ? submitStation() : handleClose())}
              >
                {isEdit ? "Editeaza" : "Inchide"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewEditStation;
