import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./authentication.scss";
import { NavLink } from "react-router-dom";
import { authentication } from "../../shared/auth";

const Authentication = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "password") {
      setPassword(value);
    } else {
      setEmail(value);
    }
  };

  const submitCredentials = async (event) => {
    event.preventDefault();
    const messageReceived = await authentication(email, password);
    setMessage(messageReceived);

    if (messageReceived.includes("Success")) {
      window.location.reload();
    }
  };

  return (
    <div className="authentication--container">
      <div className="authentication--inputs">
        <div className="authentication--title">Autentificare</div>

        <div className="authentication--container--inputs">
          <TextField
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email ?? ""}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="Parola"
            variant="outlined"
            value={password ?? ""}
            onChange={(event) => handleChange(event)}
          />
          <span>
            Nu esti intregistrat?{" "}
            <NavLink to="/register">Creeaza un cont!</NavLink>
          </span>
          <span
            className={
              message?.includes("Success") ? "auth--success" : "auth--failed"
            }
          >
            {message.length > 0 && message}
          </span>
          <button onClick={(event) => submitCredentials(event)}>
            Autentificare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
