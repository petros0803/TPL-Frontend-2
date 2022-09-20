import React from "react";
import { LOST } from "../../Constants/lost.constants";
import "./lostAndFound.scss";

const LostAndFound = () => {
  return (
    <div className="lost--container">
      <div className="lost--page--title">Obiecte pierdute si gasite</div>
      <div>
        În cazul în care se pierd abonamente, acte sau obiecte în mijloacele de
        transport ale SC TPL SA, dacă acestea sunt găsite, le puteţi ridica de
        la sediul societăţii. Vă punem la dispoziţie lista cu
        documentele/obiectele găsite:
      </div>
      <div>
        <table className="lost--table">
          <thead>
            <tr>
              <td style={{ textIndent: "15px" }}>Documentul / obiectul</td>
              <td style={{ textIndent: "15px" }}>Nume</td>
              <td style={{ textAlign: "center" }}>Observaţii</td>
            </tr>
          </thead>
          <tbody>
            {LOST.map((lost, index) => (
              <tr key={index}>
                <td
                  className="lost--table--text"
                  style={{ textIndent: "15px" }}
                >
                  {lost.item}
                </td>
                <td
                  className="lost--table--text"
                  style={{ textIndent: "15px" }}
                >
                  {lost.name}
                </td>
                <td
                  className="lost--table--value"
                  style={{ textAlign: "center" }}
                >
                  {lost.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LostAndFound;
