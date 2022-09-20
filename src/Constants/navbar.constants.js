import LogoTPL from "../Assets/Images/LogoTPL.png";
const role = localStorage.getItem("role") || "";

export const NAVBAR = {
  AUTHENTICATION: {
    TEXT: role === "admin" ? "Admin" : "Autentificare",
    URL: role === "admin" ? "" : "/authentication",
    hasMore: role === "admin" ? true : false,
  },
  INFORMATIONS: { TEXT: "Informatii", URL: "/informations", hasMore: true },
  ANNOUNCES: { TEXT: "Anunturi", URL: "/announces", hasMore: false },
  LOGO: { TEXT: LogoTPL, URL: "/", hasMore: false },
  TRAILS: { TEXT: "Trasee", URL: "/trails", hasMore: true },
  PAYMENTS: { TEXT: "Plati", URL: "/prices", hasMore: false },
  CONTACT: { TEXT: "Contact", URL: "/contact", hasMore: false },
};

export const CHOICES = {
  TRAILS: [
    {
      TEXT: "Program",
      MORE_CHOICES: [
        { TEXT: "Autobuze", URL: "/busses" },
        { TEXT: "Microbuze", URL: "/minibusses" },
      ],
    },
    {
      TEXT: "Trasee",
      MORE_CHOICES: [
        { TEXT: "Linia 1", URL: "/trails/1" },
        { TEXT: "Linia 2", URL: "/trails/2" },
        { TEXT: "Linia 3", URL: "/trails/3" },
        { TEXT: "Linia 4", URL: "/trails/4" },
        { TEXT: "Linia 5", URL: "/trails/5" },
        { TEXT: "Linia 15", URL: "/trails/15" },
        { TEXT: "Linia 17", URL: "/trails/17" },
        { TEXT: "Linia 21", URL: "/trails/21" },
        { TEXT: "Linia 22", URL: "/trails/22" },
        { TEXT: "Linia 23", URL: "/trails/23" },
        { TEXT: "Linia 26", URL: "/trails/26" },
        { TEXT: "Linia 28", URL: "/trails/28" },
        { TEXT: "Linia 29", URL: "/trails/29" },
        { TEXT: "Linia 30", URL: "/trails/30" },
      ],
    },
  ],
  INFORMATIONS: [
    {
      TEXT: "Despre noi",
      URL: "/aboutus",
    },
    {
      TEXT: "Conducere",
      URL: "/management",
    },
    {
      TEXT: "Galerie foto",
      URL: "/gallery",
    },
    {
      TEXT: "Sanctiuni",
      URL: "/fines",
    },
    {
      TEXT: "Obiecte pierdute",
      URL: "/lostAndFound",
    },
    {
      TEXT: "Recomandari",
      URL: "/recommendation",
    },
  ],
  AUTHENTICATION: [
    { TEXT: "Utilizatori", URL: "/admin/users" },
    { TEXT: "Trasee", URL: "/admin/trails" },
    { TEXT: "Statii", URL: "/admin/stations" },
    { TEXT: "Deconectare" },
  ],
};
