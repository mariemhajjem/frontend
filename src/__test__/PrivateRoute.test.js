import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import AppRouter from "../Router";

import ManageCenter from "../Admin/ManageCenter/ManageCenter";
import CitoyenSpace from "../CitoyenSpace/CitoyenSpace";
import InscriptionInCenter from "../InscriptionInCenter/InscriptionInCenter";

describe("PrivateRoute", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  it("should direct to app page to ManageCenter", () => {
    history.push("/ManageCenter");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/ManageCenter");
    expect(history.location.pathname).not.toBe("/login");
  });

  it("should direct app page to inscriptionInCenter", () => {
    history.push("/inscriptionInCenter");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/inscriptionInCenter");
    expect(history.location.pathname).not.toBe("/");
  });

  it("should direct app page to manage citizen space", () => {
    history.push("/citoyenSpace");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/citoyenSpace");
    expect(history.location.pathname).not.toBe("/");
  });

  it("should direct app page to update inscription", () => {
    history.push("/updateInscription");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/updateInscription");
    expect(history.location.pathname).not.toBe("/");
  });

  it("should direct app page to report", () => {
    history.push("/reportRdv");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/reportRdv");
    expect(history.location.pathname).not.toBe("/");
  });

  it("should direct app page to manage vaccines", () => {
    history.push("/ManageVaccines");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/ManageVaccines");
    expect(history.location.pathname).not.toBe("/");
  });

  it("should direct app page to manage volunteers", () => {
    history.push("/ManageVolunteers");
    render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );

    expect(history.location.pathname).toBe("/ManageVolunteers");
    expect(history.location.pathname).not.toBe("/");
  });
});
