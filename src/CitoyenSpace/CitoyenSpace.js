import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/auth";
import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";

import "./CitoyenSpace.css";
// import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function CitoyenSpace() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [cin, setCin] = useState("");
  const [code, setCode] = useState("");
  const history = useHistory();
  const handleSubmit = (values) => {
    const user = {
      cin: values.cin,
      code: values.code,
    };
    dispatch(actions.login(user));
    console.log(isLoggedIn);
    if (isLoggedIn) {
      history.push("/Profile");
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/Profile");
    }
  });

  return (
    <div>
      <Navbar />

      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
        onFinish={handleSubmit}
      >
        <p className="para">
          {t("Veuillez vous connecter à votre espace citoyen")}
        </p>
        <Form.Item
          name="cin"
          // label="CIN:"
          label={t("CIN")}
          rules={[
            {
              required: true,
            },
            // { min: 8, message: "CIN est composée de 8 chiffres." },
          ]}
        >
          <Input type="cin" onChange={(e) => setCin(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="code"
          label={t("Num d'inscription")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="code" onChange={(e) => setCode(e.target.value)} />
        </Form.Item>
        <Button type="primary" className="bt" htmlType="submit" shape="round">
          {t("Se connecter")}
        </Button>
        <p className="para2">{errorMessage}</p>
      </Form>
    </div>
  );
}
//export default connect(mapStateToProps, { loggedUser })(CitoyenSpace);
export default CitoyenSpace;