import React, { useState } from "react";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { register } from "../../shared/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setName(value);
    }
  };

  const submitCredentials = async (event) => {
    event.preventDefault();
    const messageReceived = await register(name, email, password);
    setMessage(messageReceived);

    setTimeout(() => {
      if (messageReceived.includes("Success")) {
        navigate("/authentication");
      }
    }, 1500);
  };

  return (
    <div className="authentication--container">
      <div className="authentication--inputs">
        <div className="authentication--title">Inregistrare</div>

        <div className="authentication--container--inputs">
          <TextField
            name="name"
            id="outlined-basic"
            label="Nume"
            variant="outlined"
            value={name ?? ""}
            onChange={(event) => handleChange(event)}
          />
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
          <TextField
            name="passwordConfirm"
            id="outlined-basic"
            label="Repetati parola"
            variant="outlined"
            value={passwordConfirm ?? ""}
            onChange={(event) => handleChange(event)}
          />
          <span>
            Ai deja un cont?{" "}
            <NavLink to="/authentication">Autentificare!</NavLink>
          </span>
          <span
            className={
              message?.includes("Success") ? "auth--success" : "auth--failed"
            }
          >
            {message.length > 0 && message}
          </span>
          <button onClick={(event) => submitCredentials(event)}>
            Inregistrare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
