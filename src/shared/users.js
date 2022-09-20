import axios from "axios";
import API_CONSTATS from "../API/api.constants";
import { TOKEN } from "./shared.functions";

export const GET_ALL_USERS = async () => {
  const resp = await axios.get(API_CONSTATS.USERS, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  console.log(resp);

  if (resp?.status === 200) {
    return resp.data;
  }
};

export const EDIT_USER = async (id, name, email) => {
  try {
    const resp = await axios.put(
      `${API_CONSTATS.USERS}/${id}`,
      {
        name: name,
        email: email,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    if (resp?.status === 201) {
      return resp.status;
    }
  } catch (err) {
    console.log(err);
  }
};

export const DELETE_USER = async (id) => {
  try {
    const resp = await axios.delete(`${API_CONSTATS.USERS}/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (resp.status === 204) {
      return resp.status;
    }
  } catch (err) {
    console.log(err);
  }
};

export const ADD_USER = async (name, email, password) => {
  try {
    const resp = await axios.post(
      API_CONSTATS.USERS,
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    if (resp?.status === 201) {
      return resp.status;
    }
  } catch (err) {
    console.log(err);
  }
};

export const GET_ALL_EMPLOYEES = async () => {
  const resp = await axios.get(API_CONSTATS.EMPLOYEES, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (resp?.status === 200) {
    return resp.data;
  }
};
