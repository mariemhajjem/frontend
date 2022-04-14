import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import {
  CheckCircleOutlined,
  HighlightOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import "./Stat.css";
const style = {
  background: "white",
  padding: "6px",
  margin: "12px",
};

function Stat() {
  const { t } = useTranslation();
  return (
    <div className="statStyle">
      <br />
      <h2 className="titstyle">{t("Le vaccin en Tunisie")}</h2>
      <h1>
        {t("Plus De Statistiques")}
        <br /> {t("Sur Les Campagnes De Vaccination")}
      </h1>
      <br />
      <Row gutter={{ xs: 8, sm: 8, md: 18, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div className="textStyle" style={style}>
            <CheckCircleOutlined className="iconStyle" />
            <br />
            <br />
            <h2>1234</h2>
            <p>{t("Inscrits")}</p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div className="textStyle" style={style}>
            <HighlightOutlined className="iconStyle" />
            <br />
            <br />
            <h2>1234?</h2>
            <p>{t("Vaccinés 1ère dose")} </p>
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div className="textStyle" style={style}>
            <SmileOutlined className="iconStyle" />
            <br />
            <br />
            <h2> 1234</h2>
            <p>{t("Vaccinés 2éme dose")}</p>{" "}
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
}
export default Stat;
