import React from "react";
import "./fines.scss";
import { FINES } from "../../Constants/fines.constants";

const Fines = () => {
  return (
    <div className="fines--container">
      <div className="fines--title">Norme si sanctiuni</div>
      <div>
        <b>Art.23.</b> Călătorii care utilizează serviciile de transport public
        local au, în principal, următoarele obligaţii:
        <ol type="a">
          <li>
            să deţină asupra lor, pe timpul transportului, legitimaţii de
            călătorie valabile (bilete, abonamente etc) sau alte documente de
            transport, stabilite prin acte normative, care le conferă dreptul de
            a călători cu mijloacele de transport public local
          </li>
          <li>
            să achite costul legitimaţiilor de călătorie valabile pentru
            călătoriile pe care le efectuează, conform tarifelor menţionate
            lizibil pe acestea
          </li>
          <li>
            să nu aducă prejudicii mijloacelor de transport sau a bunurilor ce
            aparţin de infrastructura tehnico-edilitară de transport
          </li>
          <li>
            să aibă un comportament civilizat faţă de personalul deservent şi
            faţă de ceilalţi călători
          </li>
          <li>
            să se legitimeze la solicitarea expresă a personalului cu atribuţii
            de taxare şi control, identificat prin ecuson sau legitimaţie de
            serviciu Art.24. Constituie contravenţie la normele privind
            transportul public de călători în municipiul Suceava săvârşirea de
            către persoanele fizice a oricăreia din următoarele fapte:
          </li>
        </ol>
        <b>Art.24.</b> Constituie contravenţie la normele privind transportul
        public de călători în municipiul Suceava săvârşirea de către persoanele
        fizice a oricăreia din următoarele fapte:
      </div>
      <div>
        <table className="fines--table">
          <thead>
            <tr>
              <td style={{ textIndent: "15px" }}>Descrierea faptei</td>
              <td
                style={{ textAlign: "center", borderLeft: "1px solid #5603ad" }}
              >
                Amenda (lei)
              </td>
            </tr>
          </thead>
          <tbody>
            {FINES.map((fine) => (
              <tr key={fine.id}>
                <td className="fines--table--text">{fine.label}</td>
                <td
                  className="fines--table--value"
                  style={{ textAlign: "center" }}
                >
                  {fine.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fines;
