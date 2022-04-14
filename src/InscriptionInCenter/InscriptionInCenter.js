import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../redux/types";
import * as actions from "../redux/actions/users";
import { Form, Input, Button, Select, InputNumber, notification } from "antd";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";

import "../InscriptionInCenter/InscriptionInCenter.css";
import gouvernorat from "../constants/gouvernorat";
import villes from "../constants/villes";

function InscriptionInCenter({ isUpdateInscri }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const changeGov = (gover) => {
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };
  const error = useSelector((state) => state.errorReducer);
  const [err, setError] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    if (error.message) {
      setError(error.message);
      setCode(error.code);
    }
  }, [error]);
  const handleSubmit = async (values) => {
    if (isUpdateInscri) {
      dispatch(actions.updateUser(values));
    } else {
      const user = {
        cin: values.cin,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        birthday: values.birthday,
        governorate: values.governorate,
        city: values.city,
      };
      dispatch(actions.registerCenter(user));
    }
  };
  const clearError = () => {
    dispatch({
      type: types.CLEAR_ERRORS,
    });
    setError("");
    setCode("");
  };
  const popUp = (type) => {
    notification[type]({
      message: code,
      description: err,
      onClose: clearError,
    });
  };
  return (
    <div>
      <Navbar />

      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="inscriC"
        onFinish={handleSubmit}
      >
        <p className="parag">
          {t("Veuillez remplir ces champs en langue française")}
          {err && popUp("error")}
        </p>
        <Form.Item
          name="cin"
          // label="CIN:"
          label={t("CIN")}
          rules={[
            {
              required: true,
              type: "number",
            },
            { min: 8, message: "CIN est composée de 8 chiffres." },
            { max: 8, message: "CIN est composée de 8 chiffres." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("Nom")}
          name="firstname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("Prénom")}
          rules={[
            {
              required: true,
            },
          ]}
          name="lastname"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("Email")}
          rules={[
            {
              required: true,
              type: "email",
              message: "Email non valide",
            },
          ]}
          name="email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("Gouvernorat")}
          name="governorate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={changeGov}>
            <Select.Option>--Choisir votre Gouvernorat--</Select.Option>
            {gouvernorat?.map((gov, key) => {
              return (
                <Select.Option key={key} value={gov}>
                  {gov}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label={t("Ville")}
          name="city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option>--Choisir votre ville--</Select.Option>
            {cities?.map((city, key) => {
              return (
                <Select.Option key={key} value={city}>
                  {city}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label={t("Age")}
          name="birthday"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" block htmlType="submit" shape="round">
          S'inscrire
        </Button>
      </Form>
    </div>
  );
}

export default InscriptionInCenter;
