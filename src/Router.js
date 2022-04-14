import React from "react";
import { Router, Switch, Route, Navigate, Redirect } from "react-router-dom";

import { createBrowserHistory } from "history";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import ManageCenter from "./Admin/ManageCenter/ManageCenter";
import ManageOpenDay from "./Admin/ManageOpenDay/ManageOpenDay";
import ManagePharmacy from "./Admin/ManagePharmacy/ManagePharmacy";
import inscriptionPharmacie from "./inscriptionPharmacie/inscriptionPharmacie";
import UpdateInscri from "./updateInscri/updateInscri";
import ReportRdv from "./reportRdv/reportRdv";
import Login from "./login";
import ManageVaccine from "./Admin/ManageVaccine/ManageVaccine";
import ManageVolunteers from "./Admin/ManageVolunteers/ManageVolunteers";
import InscriptionInCenter from "./InscriptionInCenter/InscriptionInCenter";
import Chatbot from "./Chatbot";
import CitoyenSpace from "./CitoyenSpace/CitoyenSpace";
import Profile from "./Profile/Profile";

export let history = createBrowserHistory({ basename: "" });
class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <Route path="/Home" component={Home}></Route>

          <Route path="/ManageCenter" component={ManageCenter}></Route>
          <Route path="/ManagePharmacy" component={ManagePharmacy}></Route>
          <Route path="/ManageOpenDay" component={ManageOpenDay}></Route>
          <Route
            path="/inscriptionInCenter"
            component={InscriptionInCenter}
          ></Route>
          <Route path="/ManageVaccines" component={ManageVaccine}></Route>
          <Route path="/ManageVolunteers" component={ManageVolunteers}></Route>

          <Route
            path="/inscriptionPharmacie"
            component={inscriptionPharmacie}
          ></Route>
          <Route path="/updateInscription" component={UpdateInscri}></Route>
          <Route path="/citoyenSpace" component={CitoyenSpace}></Route>

          <Route path="/reportRdv" component={ReportRdv}></Route>

          <Route path="/Admin" component={Admin}></Route>
          <Route path="/Chatbot" component={Chatbot}></Route>
          <Route
            path="/Profile"
            render={(props) =>
              localStorage.getItem("token") ? (
                <Profile {...props}></Profile>
              ) : (
                <Redirect to="/Home" />
              )
            }
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
