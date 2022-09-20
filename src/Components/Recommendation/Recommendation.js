import React from "react";
import "./recommendation.scss";

const Recommendation = () => {
  return (
    <div className="recommandation--container">
      <div className="recommandation--page--title">
        Recomandări pentru călători
      </div>
      <div>
        În conformitate cu prevederile <b>HCL Suceava nr. 98/2011</b> cuprinzand
        norme privind buna convieturie, ordinea si linistea publica, transportul
        public de calatori, gospodaria orasului si protectia mediului şi{" "}
        <b>HCL Suceava nr. 301/2009</b> privind aprobarea regulamentul opentru
        efectuarea transportului public local
      </div>
      <ul>
        <li>
          Transportul călătorilor cu mijloacele de transport aparţinând SC TPL
          SA se efectuează pe baza biletelor, abonamentelor sau legitimaţiilor
          de călătorie.
        </li>
        <li>
          Acestea trebuie păstrate de călători asupra lor în bună stare şi
          trebuie prezentate organelor de control abilitate la cererea acestora.
        </li>
        <li>
          Copiii în vârstă de până la 5 ani au dreptul de a fi transportaţi
          gratuit.
        </li>
      </ul>
      <div className="recommandation--title">
        Sunt interzise în mijlocul de transport:
      </div>
      <div>
        <ul>
          <li>
            Acţionarea butonului de deschidere a uşilor în timpul mersului;
          </li>
          <li>
            Aşezarea bagajelor pe scaunele libere, chiar dacă spaţiul rămas
            neutilizat de către pasageri ar permite acest lucru;
          </li>
          <li>
            Deteriorarea şi distrugerea bunurilor din mijlocul de transport
            (scaune, geamuri etc.);
          </li>
          <li>
            Distragerea atenţiei conducătorului prin discuţii în timpul
            mersului;
          </li>
          <li>
            Fumatul, consumul de seminţe, băuturi alcoolice, îngheţată sau alte
            alimente;
          </li>
          <li>
            Solicitarea de a coborî în alte locuri decât cele amenajate special
            ca staţii;
          </li>
        </ul>
      </div>
      <div className="recommandation--title">
        Este interzis transportul cu mijloacele SC TPL SA a următoarelor:
      </div>
      <div>
        <ul>
          <li>
            butelii de aragaz; bidoane cu carbid; tuburi de oxigen; materiale
            explozibile;
          </li>
          <li>materiale sau substanțe rău mirositoare;</li>
          <li>materiale inflamabile (benzină, petrol, diluant etc.);</li>
          <li>animale și păsări;</li>
          <li>
            materiale sau obiecte care, prin natura, formatul şi dimensiunile
            lor, pot produce stricăciuni sau pot murdări mijloacele de
            transport, bagajele sau îmbrăcămintea călătorilor;
          </li>
          <li>
            obiecte sau mărfuri interzise la transport prin dispoziţii legale.
          </li>
        </ul>
      </div>
      <div>
        <div className="recommandation--title">Călătorii au obligaţia:</div>
        <ul>
          <li>să păstreze curăţenia în mijloacele de transport în comun;</li>
          <li>să utilizeze civilizat mijloacele de transport în comun;</li>
          <li>
            să păstreze în bună stare vehiculele cât şi interiorul acestora;
          </li>
          <li>
            în timpul mersului să călătorească aşezaţi pe scaune sau în cazul
            călătoriei în picioare să se susţină de bară.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recommendation;
