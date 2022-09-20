import React, { useState } from "react";
import "./adminTrails.scss";
import TRASH from "../../../Assets/Icons/trash.svg";
import EDIT from "../../../Assets/Icons/edit.svg";
import EYE from "../../../Assets/Icons/eye.svg";
import AddTrail from "../../Common/Modal/Trails/AddTrail/AddTrail";
import ViewEditTrail from "../../Common/Modal/Trails/ViewEditTrail/ViewEditTrail";
import DeleteTrail from "../../Common/Modal/Trails/DeleteTrail/DeleteTrail";
import TRAILS from "../../Trails/trails-dummy-data.json";

const AdminTrails = () => {
  const [isAddTrailsOpen, setIsAddTrailsOpen] = useState(false);
  const [isViewTrailsOpen, setIsViewTrailsOpen] = useState(false);
  const [isEditTrailsOpen, setIsEditTrailsOpen] = useState(false);
  const [isDeleteTrailsOpen, setIsDeleteTrailsOpen] = useState(false);
  const [trail, setTrail] = useState();

  const closeIsAddTrails = () => {
    setIsAddTrailsOpen(false);
  };

  const closeIsViewTrails = () => {
    setIsViewTrailsOpen(false);
  };

  const closeIsEditTrails = () => {
    setIsEditTrailsOpen(false);
  };

  const closeIsDeleteTrails = () => {
    setIsDeleteTrailsOpen(false);
  };

  return (
    <div className="trails--container">
      <div className="trails--title">Linii</div>
      <div className="trails--button">
        <button onClick={() => setIsAddTrailsOpen(true)}>Adauga o linie</button>
      </div>
      <table className="trails--table">
        <thead>
          <tr>
            <td>Linie</td>
            <td style={{ textAlign: "center" }}>Actiuni</td>
          </tr>
        </thead>
        <tbody>
          {TRAILS.trails?.map((trail, index) => (
            <tr key={index}>
              <td>{`Linia ${trail.id}`}</td>
              <td style={{ textAlign: "center" }}>
                <img
                  src={EYE}
                  alt="vizualizeaza"
                  onClick={() => {
                    setTrail(trail.id);
                    setIsViewTrailsOpen(true);
                  }}
                />
                <img
                  src={EDIT}
                  alt="editeaza"
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setTrail(trail.id);

                    setIsEditTrailsOpen(true);
                  }}
                />
                <img
                  src={TRASH}
                  alt="sterge"
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setTrail(trail.id);
                    setIsDeleteTrailsOpen(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddTrailsOpen && (
        <AddTrail
          isModalOpen={isAddTrailsOpen}
          handleClose={closeIsAddTrails}
        />
      )}
      {isEditTrailsOpen && (
        <ViewEditTrail
          isModalOpen={isEditTrailsOpen}
          handleClose={closeIsEditTrails}
          isEdit={true}
          trail={trail}
        />
      )}
      {isViewTrailsOpen && (
        <ViewEditTrail
          isModalOpen={isViewTrailsOpen}
          handleClose={closeIsViewTrails}
          isEdit={false}
          trail={trail}
        />
      )}

      {isDeleteTrailsOpen && (
        <DeleteTrail
          isModalOpen={isDeleteTrailsOpen}
          handleClose={closeIsDeleteTrails}
          trail={trail}
        />
      )}
    </div>
  );
};

export default AdminTrails;
