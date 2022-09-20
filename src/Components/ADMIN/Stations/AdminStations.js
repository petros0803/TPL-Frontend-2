import React, { useState, useEffect } from "react";
import "./adminStations.scss";
import TRASH from "../../../Assets/Icons/trash.svg";
import EDIT from "../../../Assets/Icons/edit.svg";
import EYE from "../../../Assets/Icons/eye.svg";
import { GET_ALL_STATIONS } from "../../../shared/stations";
import AddStation from "../../Common/Modal/Stations/AddStation/AddStation";
import ViewEditStation from "../../Common/Modal/Stations/ViewEditStation/ViewEditStation";
import DeleteStation from "../../Common/Modal/Stations/DeleteStation/DeleteStation";

const AdminStations = () => {
  const [isAddStationsOpen, setIsAddStationsOpen] = useState(false);
  const [isViewStationsOpen, setIsViewStationsOpen] = useState(false);
  const [isEditStationsOpen, setIsEditStationsOpen] = useState(false);
  const [isDeleteStationsOpen, setIsDeleteStationsOpen] = useState(false);
  const [stationToModify, setStationToModify] = useState();
  const [stations, setStations] = useState();
  const [refresh, setRefresh] = useState(false);

  const getStations = async () => {
    const stationsBE = await GET_ALL_STATIONS();
    setStations(stationsBE);
  };

  useEffect(() => {
    getStations();
  }, [refresh]);

  const closeIsAddStations = () => {
    setStationToModify();
    setIsAddStationsOpen(false);
  };

  const closeIsDeleteStations = () => {
    setStationToModify();
    setIsDeleteStationsOpen(false);
  };

  const closeViewEditStationModal = () => {
    setIsViewStationsOpen(false);
    setIsEditStationsOpen(false);
  };

  const reloadStations = () => {
    setRefresh(!refresh);
  };

  const getStationById = () => {
    return stations.filter((station) => station.id === stationToModify);
  };

  return (
    <div className="trails--container">
      <div className="trails--title">Statii</div>
      <div className="trails--button">
        <button onClick={() => setIsAddStationsOpen(true)}>
          Adauga o statie
        </button>
      </div>
      <table className="trails--table">
        <thead>
          <tr>
            <td>Statie</td>
            <td style={{ textAlign: "center" }}>Actiuni</td>
          </tr>
        </thead>
        <tbody>
          {stations?.map((station, index) => (
            <tr key={index}>
              <td>{`${station.name}`}</td>

              <td style={{ textAlign: "center" }}>
                <img
                  src={EYE}
                  alt="vizualizeaza"
                  onClick={() => {
                    setStationToModify(station.id);
                    setIsViewStationsOpen(true);
                  }}
                />
                <img
                  src={EDIT}
                  alt="editeaza"
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setStationToModify(station.id);
                    setIsEditStationsOpen(true);
                  }}
                />
                <img
                  src={TRASH}
                  alt="sterge"
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setStationToModify(station.id);
                    setIsDeleteStationsOpen(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddStationsOpen && (
        <AddStation
          isModalOpen={isAddStationsOpen}
          handleClose={closeIsAddStations}
          reload={reloadStations}
        />
      )}
      {(isEditStationsOpen || isViewStationsOpen) && (
        <ViewEditStation
          isModalOpen={isEditStationsOpen || isViewStationsOpen}
          handleClose={closeViewEditStationModal}
          isEdit={isEditStationsOpen ? true : false}
          id={getStationById}
          reload={reloadStations}
        />
      )}

      {isDeleteStationsOpen && (
        <DeleteStation
          isModalOpen={isDeleteStationsOpen}
          handleClose={closeIsDeleteStations}
          id={getStationById}
          reload={reloadStations}
        />
      )}
    </div>
  );
};

export default AdminStations;
