import { Menu, Image, Button } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as actions from "../redux/actions/auth";
import logo from "../img/logoTun.png";
import i18n from "../i18n";
import React from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
const { SubMenu } = Menu;
const centerStyle = {
  justifyContent: "center",
  position: "fixed",
  zIndex: 1,
  width: "100%",
  height: "11.5%",
};
const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};
const mapStateToProps = (state) => ({
  connectedUser: state.auth.loggedUser,
});

function Navbar(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = (e) => {
    dispatch(actions.logout());
    history.push("/Home");
  };
  return (
    <div className="header">
      <Menu mode="horizontal" style={centerStyle}>
        <Menu.Item key="img">
          <Image src={logo} className="logos" />
        </Menu.Item>

        <Menu.Item key="home">
          <Link to="/Home">{t("Welcome")}</Link>
        </Menu.Item>

        <SubMenu key="Inscription" title={t("S'inscrire")}>
          <Menu.Item key="inscriC">
            <Link to="/inscriptionInCenter">
              {t("Inscription dans un centre")}
            </Link>
          </Menu.Item>
          <Menu.Item key="inscriP">
            <Link to="/inscriptionPharmacie">
              {t("Inscription dans une pharmacie")}
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item href="#Faq" target="#Faq" key="FAQ">
          <a href="#Faq"> {t("FAQ")}</a>
        </Menu.Item>

        <Menu.Item key="Contact">
          <a href="#Contact">{t("Contactez-nous")}</a>
        </Menu.Item>

        <SubMenu key="Gestion d'inscription" title={t("Gestion d'inscription")}>
          <Menu.Item key="MAJ">
            <Link to="/updateInscription">
              {t("Mettre à jour inscription")}
            </Link>
          </Menu.Item>
          <Menu.Item key="rdv">
            <Link to="/reportRdv">{t("Report rendez-vous")}</Link>
          </Menu.Item>
        </SubMenu>
        {props.connectedUser != null ? (
          <Menu.Item key="logout" onClick={logout}>
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item key="Espace Citoyen">
            <Link to="/citoyenSpace">{t("Espace Citoyen")}</Link>
          </Menu.Item>
        )}

        <Menu.Item key="translation">
          <Button shape="circle" onClick={changeLanguage("fr")}>
            fr
          </Button>
          <Button shape="circle" onClick={changeLanguage("en")}>
            en
          </Button>
          <Button shape="circle" onClick={changeLanguage("ar")}>
            ar
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default connect(mapStateToProps)(Navbar);
