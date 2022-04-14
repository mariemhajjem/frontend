import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/users";

import Navbar from "../Navbar/Navbar";
import { Form, Input, Button, notification } from "antd";
import "./updateInscri.css";
import gouvernorat from "../constants/gouvernorat";
import villes from "../constants/villes";
import InscriptionInCenter from "../InscriptionInCenter/InscriptionInCenter";
import { useTranslation } from "react-i18next";

function UpdateInscri() {
  const { t } = useTranslation();

  const [cities, setCities] = useState([]);

  const [userExist, setUserExist] = useState(null);

  const error = useSelector((state) => state.errorReducer);
  console.log("errroe", error);

  const dispatch = useDispatch();
  // const [ userExist,setUserExist ] = useState(false);

  const onSubmit = ({ cin }) => dispatch(actions.getUserByCin(cin));

  const selectedUser = useSelector((state) => state.users.selectedUser);
  const RenderForm = () => {
    return (
      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
        onFinish={onSubmit}
      >
        <p className="para">{t("Mettez à jour votre inscription à EVAX")}</p>
        <Form.Item
          name="cin"
          label={t("CIN")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label={t("Email")}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" className="bt" htmlType="submit" shape="round">
          {t("Mettre à jour")}
        </Button>
      </Form>
    );
  };

  useEffect(() => {
    if (selectedUser.cin) setUserExist(true);
  }, [selectedUser]);

  return (
    <div>
      <Navbar />

      {!userExist ? (
        <RenderForm />
      ) : (
        <InscriptionInCenter isUpdateInscri={true} />
      )}
    </div>
  );
}

export default UpdateInscri;
