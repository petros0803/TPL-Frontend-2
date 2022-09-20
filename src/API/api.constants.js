const API_BASE_URL = "https://back.hlb-ip.xyz/";

const API_CONSTATS = {
  //AUTH
  AUTHENTICATION: API_BASE_URL + "v1/login",
  REGISTER: API_BASE_URL + "v1/register",

  //USERS
  USERS: API_BASE_URL + "v1/user",
  EMPLOYEES: API_BASE_URL + "v1/employee",

  //NEWS
  GET_ALL_ANNOUNCES: API_BASE_URL + "v1/news",

  //STATIONS
  STATIONS: API_BASE_URL + "v1/stations",

  //TRAILS
  TRAILS: API_BASE_URL + "v1/routes",
};

export default API_CONSTATS;
