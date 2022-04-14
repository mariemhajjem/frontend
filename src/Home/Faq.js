import "./Faq.css";
import { Row, Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

import {
  BarChartOutlined,
  QuestionCircleOutlined,
  HighlightOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const style = {
  background: "white",
  padding: "6px",
  margin: "12px",
};

function Faq() {
  const { t } = useTranslation();
  return (
    <div id="Faq">
      <br />
      <h1>{t("Questions fréquentes sur EVAX")}</h1>
      <br />

      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <BarChartOutlined className="iconStyle" />
            <br />
            <br />
            <h3>
              {t(
                "Quels sont les grands principes de la stratégie de vaccination contre la COVID-19 ?"
              )}
            </h3>
            <p>
              <p>{t("La Tunisie s’est fixé les principes suivants :")}</p>
              {t(
                "Un accès équitable pour des vaccins gratuits, efficaces, sûrs et de qualité approuvés par les données scientifiques en temps opportun"
              )}
              <br />
              {t(
                "Une prise de décision personnelle basée sur des données transparentes et compréhensibles"
              )}
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <QuestionCircleOutlined className="iconStyle" />
            <br />
            <br />
            <h3>{t("Comment s’enregistrer pour la vaccination Covid-19 ?")}</h3>
            <p>{t("Website : www.evax.tn")} </p>
            <p>{t("SMS : 85355")}</p> <p> {t("USSD : *2021#")}</p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <HighlightOutlined className="iconStyle" />
            <br />
            <br />
            <h3> {t("Quels sont les objectifs de la vaccination ?")}</h3>
            <p>
              {t(
                "Le premier objectif de la vaccination, c’est de faire baisser le nombre des formes graves de COVID-19."
              )}
            </p>{" "}
            <p>
              {t(
                "Les résultats des études cliniques des candidats vaccins semblent converger pour démontrer un fait principal : la vaccination permet de réduire massivement la mortalité due au virus et à ses formes graves."
              )}
            </p>{" "}
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <DollarOutlined className="iconStyle" />
            <br />
            <br />
            <h3>
              {t("La vaccination contre la Covid-19 sera-t-elle gratuite ?")}
            </h3>
            <p>{t("Oui.")} </p>
            <p>
              {t(
                "La vaccination sera gratuite pour tous en Tunisie, mais selon la priorité établie par les autorités."
              )}
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <EnvironmentOutlined className="iconStyle" />
            <br />
            <br />
            <h3>{t("Où se faire vacciner ?")}</h3>
            <p>
              {t("Il y aura environ 200 centres de vaccination à raison de :")}
            </p>
            <p>
              {t(
                "1 à 2 grand (s) centre(s) par gouvernorat ouvert toute la semaine Et un centre par délégation à identifier par direction régionale de la santé ouvert le weekend"
              )}
            </p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div style={style} className="textStyle">
            <ExclamationCircleOutlined className="iconStyle" />
            <br />
            <br />
            <h3> {t("Que faire en cas de problème lors de l'inscription?")}</h3>
            <p>
              {t(
                "Un numéro vert gratuit a été mis en place pour accompagner les citoyens tout au long de la campagne de vaccination."
              )}{" "}
              <br />
              {t(
                "Le numéro vert : 80102021, ouvert du lundi au vendredi de 09h à 17h"
              )}
            </p>{" "}
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Faq;
