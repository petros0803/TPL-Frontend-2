import React from "react";
import { SUBSCRIPTIONS } from "../../Constants/prices.constants";
import "./prices.scss";

const Prices = () => {
  return (
    <div className="subscriptions--container">
      <div className="subscriptions--title">
        Pretul biletor si al abonamentelor. Gratuitati.
      </div>
      <div>
        <ul>
          <li>
            Preţul unui bilet pentru o persoană pentru o singură călătorie este{" "}
            <b>2,50 lei</b>
          </li>
          <li>
            Biletul se procură la <b>urcarea în mijlocul de transport</b> de la
            taxator şi{" "}
            <b>este valabil doar în mijlocul de transport respectiv</b>
          </li>
          <li>
            Călătorii au{" "}
            <b>
              obligaţia de a solicita şi păstra biletul de călătorie asupra lor
              pe toată durata călătoriei şi de a-l prezenta organelor de control
            </b>
          </li>
        </ul>
      </div>
      <div>
        <table className="subscriptions--table">
          <thead>
            <tr>
              <td style={{ textIndent: "15px" }}>Tip abonament</td>
              <td
                style={{ textAlign: "center", borderLeft: "1px solid #5603ad" }}
              >
                Pret (lei)
              </td>
            </tr>
          </thead>
          <tbody>
            {SUBSCRIPTIONS.map((subscription, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="subscriptions--table--text">
                    {subscription.label}
                  </td>
                  <td
                    className="subscriptions--table--value"
                    style={{ textAlign: "center" }}
                  >
                    {subscription.value}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="subscriptions--subscriptions--text">
        * abonamentul subvenționat pentru elevi se eliberează elevilor care
        urmează cursurile unei unităţi de învăţământ de stat din municipiul
        Suceava
        <br />
        ** abonamentul subvenționat pentru studenți se eliberează numai
        studenţilor la zi cu domiciliul stabil în municipiul Suceava
        <ul>
          <li>
            acte necesare pentru eliberare: adeverinţă de elev/student pe anul
            şcolar în curs
          </li>
          <li>
            abonamentul pentru elevi/studenţi trebuie însoţit de unul din
            următoarele documente: actul de identitate în copie sau original;
            copie după certificatul de naştere; carnetul de elev/legitimaţia de
            student
          </li>
          <li>
            Abonament subvenţionat pentru pensionari - acte necesare: actul de
            identitate, cuponul de pensie în original si în copie
          </li>
          <li>
            Abonament pentru donatorii de sânge - acte necesare: actul de
            identitate, adeverinţa de donator
          </li>
        </ul>
      </div>
      <div className="subscriptions--title">Gratuitati</div>
      <div className="subscriptions--subscriptions--text">
        <div className="subscriptions--title-second">
          In conformitate cu legislatia in vigoare eliberam legitimatii de
          calatorie pentru urmatoarele categiruu de persoane:
        </div>
        <ul>
          <li>
            Foşti detinuţi politici (titular sau soţ supravieţuitor) -
            Decret-Lege nr.118/1990
          </li>
          <li>
            Refugiaţi/deportaţi (titular sau soţ supravieţuitor) - Legea nr.
            189/2000
          </li>
          <li>Veterani de război/ văduve de veterani - Legea nr.44/1994</li>
          <li>
            Eroi ai Revoluţiei şi urmaşii celor decedaţi în Revoluţia din
            Decembrie 1989 - Legea nr. 341/2004
          </li>
          <li>
            Acte necesare: hotărârea/decizia emisă de Casa de Pensii (în
            original şi în copie) SAU după caz certificatul de revoluţionar (în
            original şi în copie), actul de identitate (în original şi în
            copie), o fotografie recentă, legitimaţia anterioară LEGITIMAŢIILE
            DE CĂLĂTORIE TPL se eliberează la punctul CENTRU Program: luni -
            vineri 7.00 - 18.00; sâmbăta, duminica şi sărbătorile legale închis
          </li>
          <li>
            Persoanele cu handicap - se vor legitima cu un document standard
            eliberat de Direcţia Generală de Asistenţa Socială şi Protecţie a
            Copilului din fiecare judeţ, respectiv sector din municipiul
            Bucureşti, denumit Legitimaţia pentru transportul urban cu mijloace
            de transport în comun de suprafaţă. Primesc această legitimaţie
            persoanele cu handicap grav sau accentuat, asistenţii personali ai
            persoanelor cu handicap grav şi asistenţii personali profesionişti
            ai persoanelor cu handicap grav sau accentuat. Aceste legitimaţii
            sunt valabile pentru transportul în comun pe tot teritoriul ţării
            (indiferent de domiciliu).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
