import axios from "axios";
import API_CONSTATS from "../API/api.constants";

export const authentication = async (email, password) => {
  let message = "";
  let resp;

  try {
    resp = await axios.post(API_CONSTATS.AUTHENTICATION, {
      email: email,
      password: password,
    });
    if (resp?.status === 200) {
      localStorage.setItem("role", resp.data.role.name);
      localStorage.setItem("token", resp.data.token);
      message = "Successfully authenticated";
    }
  } catch (err) {
    console.log(err);
    message = "Email or password incorrect";
  }

  return message;
};

export const register = async (name, email, password) => {
  let message = "";
  let resp;

  try {
    resp = await axios.post(API_CONSTATS.REGISTER, {
      name: name,
      email: email,
      password: password,
    });

    if (resp?.status === 201) {
      message = "Successfully registerd";
    }
  } catch (err) {
    message = "A user with this email already exist";
  }

  return message;
};
