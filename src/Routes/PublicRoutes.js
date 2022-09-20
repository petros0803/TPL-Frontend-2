import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import AnnouncePage from "../Components/Announces/AnnouncePage/AnnouncePage";
import Announces from "../Components/Announces/Announces";
import Busses from "../Components/Busses/Busses";
import Header from "../Components/Common/Header/Header";
import Navbar from "../Components/Common/Navbar/Navbar";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Trails from "../Components/Trails/Trails";
import MiniBusses from "../Components/MiniBusses/MiniBusses";
import AboutUs from "../Components/AboutUs/AboutUs";
import Management from "../Components/Management/Management";
import Gallery from "../Components/Gallery/Gallery";
import Fines from "../Components/Fines/Fines";
import LostAndFound from "../Components/LostAndFound/LostAndFound";
import Recommendation from "../Components/Recommendation/Recommendation";
import Authentication from "../Components/Authentication/Authentication";
import Prices from "../Components/Prices/Prices";
import Register from "../Components/Register/Register";
import Users from "../Components/ADMIN/Users/Users";
import AdminTrails from "../Components/ADMIN/Trails/AdminTrails";
import AdminStations from "../Components/ADMIN/Stations/AdminStations";

const PublicRoutes = () => {
  const isAdmin =
    localStorage.getItem("role")?.toLocaleLowerCase() === "admin" ?? false;

  return (
    <Router>
      <div className="web--container">
        <Navbar />
        <div className="page--container">
          <div className="principal--container">
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/announces" element={<Announces />} />
              <Route
                exact
                path="/announces/:announceID"
                element={<AnnouncePage />}
              />
              <Route exact path="/trails/:trailID" element={<Trails />} />
              <Route exact path="/busses" element={<Busses />} />
              <Route exact path="/minibusses" element={<MiniBusses />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/management" element={<Management />} />
              <Route exact path="/gallery" element={<Gallery />} />
              <Route exact path="/fines" element={<Fines />} />
              <Route exact path="/lostAndFound" element={<LostAndFound />} />
              <Route
                exact
                path="/recommendation"
                element={<Recommendation />}
              />
              <Route exact path="/prices" element={<Prices />} />
              <Route
                exact
                path="/authentication"
                element={!isAdmin ? <Authentication /> : <Navigate to="/" />}
              />
              <Route
                exact
                path="/register"
                element={!isAdmin ? <Register /> : <Navigate to="/" />}
              />
              {/*protected routes*/}
              <Route
                exact
                path="/admin/users"
                element={isAdmin ? <Users /> : <Navigate to="/" />}
              />
              <Route
                exact
                path="/admin/trails"
                element={isAdmin ? <AdminTrails /> : <Navigate to="/" />}
              />
              <Route
                exact
                path="/admin/stations"
                element={isAdmin ? <AdminStations /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default PublicRoutes;
