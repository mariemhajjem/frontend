import React, { useEffect, useState } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import * as actions from "../redux/actions/users";
import { DownloadOutlined } from "@ant-design/icons";
import { Image, Layout, Row, Col, Button } from "antd";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import logo from "../img/logoTun.png";

// const mapStateToProps = (state) => ({
//   connectedUser: state.auth.loggedUser,
//   selectedUser: state.users.selectedUser,
// });

function Profile(props) {
  const connectedUser = useSelector((state) => state.auth.loggedUser);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const showDate = (date) => {
    var convertedDate = new Date(date);
    return (
      convertedDate.getDay() +
      "-" +
      convertedDate.getMonth() +
      "-" +
      convertedDate.getFullYear()
    );
  };
  const downloadPdf = (e) => {
    e.preventDefault();
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(connectedUser);
    dispatch(actions.getUserByCin(connectedUser?.cin));
    // console.log(selectedUser);
  }, [connectedUser]);
  return (
    <div>
      <Navbar />
      <Button type="primary" shape="round">
        Logout
      </Button>
      <Row
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
      >
        <Col span={8}></Col>
        <Col span={10}>
          <div
            id="capture"
            title="PASS Sanitaire"
            style={{
              border: "1px solid black",
              padding: "35px",
            }}
          >
            <Image src={logo} className="logo" />
            <h2>PASS Sanitaire</h2>

            <p>Nom : {selectedUser.lastname}</p>
            <p>Prénom : {selectedUser.firstname}</p>
            <p>Cin : {selectedUser.cin}</p>
            <p>Age : {selectedUser.birthday}</p>
            {selectedUser.vaccines != null &&
            selectedUser.vaccines.length > 0 ? (
              <div>
                <div>
                  {selectedUser.vaccines.map((item) => {
                    return (
                      <div>
                        {/* {item.map((vaccine) => {
                          return <p>{vaccine.vaccine_type}</p>;
                        })} */}

                        <p> Date de vaccination :{item.date}</p>
                      </div>
                    );
                  })}
                </div>

                {/* <p>
                  Date de vaccination :{showDate(selectedUser.vaccines[0].date)}
                </p>
                <p>
                  Vaccin :{selectedUser.vaccines[0].vaccine[0].vaccine_type}
                </p> */}
              </div>
            ) : (
              <p>Pas encore vacciné</p>
            )}
          </div>
          {selectedUser.vaccines != null && selectedUser.vaccines.length > 0 ? (
            <Button
              className="but"
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              onClick={downloadPdf}
            >
              Download
            </Button>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default Profile;