import axios from "axios";
import API_CONSTATS from "../API/api.constants";
import { TOKEN } from "./shared.functions";

export const GET_ALL_STATIONS = async () => {
  const resp = await axios.get(API_CONSTATS.STATIONS, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (resp?.status === 200) {
    return resp.data;
  }
};

export const ADD_STATION = async (name, isStationCoverd, lat, lng) => {
  try {
    const resp = await axios.post(
      API_CONSTATS.STATIONS,
      {
        name: name,
        covered: !!isStationCoverd,
        coordinates: `${lat}, ${lng}`,
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

export const DELETE_STATION = async (id) => {
  try {
    const resp = await axios.delete(`${API_CONSTATS.STATIONS}/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (resp.status === 200) {
      return resp.status;
    }
  } catch (err) {
    console.log(err);
  }
};

export const EDIT_STATION = async (id, name, isStationCoverd, lat, lng) => {
  try {
    const resp = await axios.put(
      `${API_CONSTATS.STATIONS}/${id}`,
      {
        name: name,
        covered: !!isStationCoverd,
        coordinates: `${lat}, ${lng}`,
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
