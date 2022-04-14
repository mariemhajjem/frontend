import React from "react";
import { Row, Col } from "antd";
import "./Contact.css";
import { PhoneOutlined, IeOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const style = {
  background: "white",
  padding: "6px",
  margin: "6px",
};

function Contact() {
  const { t } = useTranslation();
  return (
    <div id="Contact">
      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div style={style} className="textStyle">
            <br />
            <h1>{t("Contactez nous pour plus d'information")}</h1>
            <p>
              <h3>
                {t(
                  "Appel Gratuit : Centre d'appel disponible Du lundi au Vendredi de 09h à 17h"
                )}
              </h3>

              <h3>
                <PhoneOutlined className="iconS" /> +(216) 8010 20 21{" "}
              </h3>

              <h3>
                {" "}
                <IeOutlined className="iconS" />
                www.evax.tn{" "}
              </h3>
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style} className="textStyle">
            <br />
            <h1>{t("Voulez-vous vous inscrire ?")}</h1>
            <p>
              <h3>{t("Composer le #2021*")}</h3>

              <h3>{t("Envoyer un SMS à 85 355")}</h3>

              <h3>
                {t("Appeler le 8010 2021 du lundi au vendredi de 09h à 17h")}
              </h3>

              <h3>{t("Visiter notre site Evax")}</h3>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
