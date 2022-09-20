import React, { useState } from "react";
// eslint-disable-next-line
import GoogleMaps from "../Common/GoogleMaps/GoogleMaps";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const nameRegex = /[^a-zA-Z -]/g;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const phoneRegex = /^[0-9]{10}$/g;
  const messageRegex = /[^1-9a-zA-Z -]/g;

  const validations = (event) => {
    event.preventDefault();
    const valid = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };

    if (nameRegex.test(name.trim())) {
      valid.name = "Numele si prenumele nu sunt valide";
    }

    if (!emailRegex.test(email.trim())) {
      valid.email = "Emailul nu este valid";
    }

    if (!phoneRegex.test(phone.trim())) {
      valid.phone = "Numarul de telefon nu este valid";
    }

    if (messageRegex.test(message.trim())) {
      valid.message = "Mesajul nu este valid";
    }

    if (name.trim().length < 3) {
      valid.name = "Numele si prenumele sunt obligatorii";
    }
    if (phone.trim().length < 3) {
      valid.phone = "Numarul de telefon este obligatoriu";
    }
    if (email.trim().length < 3) {
      valid.email = "Emailul este obligatoriu";
    }
    if (message.trim().length < 3) {
      valid.message = "Mesajul este obligatoriu";
    }
    setErrors(valid);
  };

  const onChange = (event, setElem) => {
    const { value } = event.target;

    setElem(value);
  };

  const location = {
    address: "Strada Traian Vuia, Suceava",
    lat: 47.6634519891644,
    lng: 26.25163040308149,
  };

  return (
    <div>
      <div className="contact--container">
        Contacteaza-ne telefonic la numarul{" "}
        <a href="tel:0330 401 442">0330 401 442</a>, prin email la adresa{" "}
        <a href="email:contact@tpl-sv.ro">contact@tpl-sv.ro</a> sau trimite-ne
        un mesaj utilizand formularul de mai jos.
        {/* COMMENTED THE LINE BELLOW TO SAVE GOOGLE MAPS CREDIT */}
        <GoogleMaps location={location} />
        <div className="form--container">
          <div className="form--input--label">
            <label className={errors.name.length > 0 ? "text-error" : ""}>
              Nume si prenume*
            </label>
            <input
              type="text"
              className={errors.name.length > 0 ? "input-error" : ""}
              name="name"
              value={name ? name : ""}
              onChange={(event) => onChange(event, setName)}
            />
            {errors.name.length > 0 && <span>{errors.name}</span>}
          </div>
          <div className="form--input--label">
            <label className={errors.email.length > 0 ? "text-error" : ""}>
              Adresa de email*
            </label>
            <input
              type="text"
              className={errors.email.length > 0 ? "input-error" : ""}
              name="email"
              value={email ? email : ""}
              onChange={(event) => onChange(event, setEmail)}
            />
            {errors.email.length > 0 && <span>{errors.email}</span>}
          </div>
          <div className="form--input--label">
            <label className={errors.phone.length > 0 ? "text-error" : ""}>
              Numar de telefon*
            </label>
            <input
              type="text"
              className={errors.phone.length > 0 ? "input-error" : ""}
              name="phone"
              value={phone ? phone : ""}
              onChange={(event) => onChange(event, setPhone)}
            />
            {errors.phone.length > 0 && <span>{errors.phone}</span>}
          </div>
          <div className="form--textarea--label">
            <label className={errors.message.length > 0 ? "text-error" : ""}>
              Mesajul dumneavoastra*
            </label>
            <textarea
              className={errors.message.length > 0 ? "input-error" : ""}
              type="text"
              name="message"
              value={message ? message : ""}
              onChange={(event) => onChange(event, setMessage)}
            />
            {errors.message.length > 0 && <span>{errors.message}</span>}
          </div>
          <button onClick={(event) => validations(event)}>Trimite</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
