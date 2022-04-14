import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { Router, Switch, Route } from "react-router-dom";
import AppRouter from "../../Router";

import ManageCenter from "../../Admin/ManageCenter/ManageCenter";
import ManageVolunteers from "../../Admin/ManageVolunteers/ManageVolunteers";
import CitoyenSpace from "../../CitoyenSpace/CitoyenSpace";
import InscriptionInCenter from "../../InscriptionInCenter/InscriptionInCenter";
import ReportRdv from "../../reportRdv/reportRdv";
import ManageVaccine from "../../Admin/ManageVaccine/ManageVaccine";
import UpdateInscri from "../../updateInscri/updateInscri";
import { Provider } from "react-redux";
import { configureStore } from "../../redux/store";
let store;
describe("PrivateRoute", () => {
  beforeEach(() => {
    store = configureStore();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should redirect to login page if there is no auth", () => {
    const history = createMemoryHistory({
      initialEntries: ["/ManageCenter"],
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <AppRouter
              path="/"
              component={ManageCenter}
              redirect="/ManageCenter"
              // authenticated={false}
            />
            <Route path="/ManageCenter">
              <ManageCenter />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );
    expect(history.location.pathname).toBe("/ManageCenter");
    expect(history.location.pathname).not.toBe("/");
  });

  it("a", () => {
    const history = createMemoryHistory({
      initialEntries: ["/inscriptionInCenter"],
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route
              path="/inscriptionInCenter"
              component={InscriptionInCenter}
            ></Route>
            <AppRouter
              path="/"
              component={InscriptionInCenter}
              redirect="/inscriptionInCenter"
            />
            <Route path="/inscriptionInCenter">
              <InscriptionInCenter />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );

    expect(history.location.pathname).toBe("/inscriptionInCenter");
    expect(history.location.pathname).not.toBe("/");
  });

  it("b", () => {
    const history = createMemoryHistory({
      initialEntries: ["/citoyenSpace"],
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/citoyenSpace" component={CitoyenSpace}></Route>
            <AppRouter
              path="/"
              component={CitoyenSpace}
              redirect="/citoyenSpace"
            />
            <Route path="/citoyenSpace">
              <CitoyenSpace />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );

    expect(history.location.pathname).toBe("/citoyenSpace");
    expect(history.location.pathname).not.toBe("/");
  });

  it("update inscription", () => {
    const history = createMemoryHistory({
      initialEntries: ["/updateInscription"],
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/updateInscription" component={UpdateInscri}></Route>
            <AppRouter
              path="/"
              component={UpdateInscri}
              redirect="/updateInscription"
            />
            <Route path="/updateInscription">
              <UpdateInscri />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );

    expect(history.location.pathname).toBe("/updateInscription");
    expect(history.location.pathname).not.toBe("/");
  });

  it("report rdv", () => {
    const history = createMemoryHistory({
      initialEntries: ["/reportRdv"],
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/reportRdv" component={ReportRdv}></Route>
            <AppRouter path="/" component={ReportRdv} redirect="/reportRdv" />
            <Route path="/reportRdv">
              <ReportRdv />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );

    expect(history.location.pathname).toBe("/reportRdv");
    expect(history.location.pathname).not.toBe("/");
  });

  it("Manage vaccines", () => {
    const history = createMemoryHistory({
      initialEntries: ["/ManageVaccines"],
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/ManageVaccines" component={ManageVaccine}></Route>
            <AppRouter
              path="/"
              component={ManageVaccine}
              redirect="/ManageVaccines"
            />
            <Route path="/ManageVaccines">
              <ManageVaccine />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );

    expect(history.location.pathname).toBe("/ManageVaccines");
    expect(history.location.pathname).not.toBe("/");
  });

  it("Manage volunteers", () => {
    const history = createMemoryHistory({
      initialEntries: ["/ManageVolunteers"],
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route
              path="/ManageVolunteers"
              component={ManageVolunteers}
            ></Route>
            <AppRouter
              path="/"
              component={ManageVaccine}
              redirect="/ManageVolunteers"
            />
            <Route path="/ManageVolunteers">
              <ManageVolunteers />
            </Route>
          </Switch>
        </Router>
        , 0
      </Provider>
    );

    expect(history.location.pathname).toBe("/ManageVolunteers");
    expect(history.location.pathname).not.toBe("/");
  });
});
