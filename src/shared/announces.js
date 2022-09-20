import axios from "axios";
import API_CONSTATS from "../API/api.constants";
import { TOKEN } from "./shared.functions";

export const GET_ALL_ANNOUNCES = async () => {
  const resp = await axios.get(API_CONSTATS.GET_ALL_ANNOUNCES, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (resp?.status === 200) {
    return resp.data;
  }
};
