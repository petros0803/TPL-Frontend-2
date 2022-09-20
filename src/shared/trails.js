import axios from "axios";
import API_CONSTATS from "../API/api.constants";
import { TOKEN } from "./shared.functions";

export const GET_ALL_TRAILS = async () => {
  const resp = await axios.get(API_CONSTATS.TRAILS, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (resp?.status === 200) {
    return resp.data;
  }
};
