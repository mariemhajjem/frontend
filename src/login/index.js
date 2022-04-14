// import React from "react";
// import { useHistory } from "react-router";
// import { Form, Input, Button, Space, Spin } from "antd";
// import { useDispatch,useSelector } from "react-redux"
// import { useJwt } from "react-jwt";

// import Navbar from "../Navbar/Navbar";
// import * as actions from '../redux/actions/auth'
// import './login.css'

// function Login() {
//   const authState = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const history = useHistory()
//   const { decodedToken, isExpired } = useJwt(authState.user);
//   const handleSubmit = (values) => {
//     const user ={
//       cin:'admin', // A changer par : values.cin
//       password:'admin' // A changer par : values.code
//     }
//     dispatch(actions.login(user)).then(()=>{
//     if(authState.loggedIn  && !isExpired){
//       switch(decodedToken.role){
//         case "admin" :
//           return history.push('/Admin')
//         case "enrolled" :
//           history.push('/Home')
//           break;
//         default:
//           history.push('/Home')
//       }
//     }
//     })
//   };
//   return (
//     <div>
//       <Navbar />

//       <Form
//         name="control-ref"
//         labelCol={{ span: 4 }}
//         wrapperCol={{ span: 14 }}
//         layout="horizontal"
//         className="login"
//         onFinish={handleSubmit}
//       >
//         <p className="parag">Veuillez remplir ces champs en langue française</p>
//         <Form.Item
//           name="cin"
//           label="CIN:"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Code:"
//           name="Code"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" shape="round">
//           S'inscrire
//         </Button>
//         <br />
//         <br />
//         {authState.errors &&  <Space size="middle"><Spin size="large" /></Space>}
//       </Form>

//     </div>
//   );
// }
// export default Login;
