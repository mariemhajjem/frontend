// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"; 
// import gouvernorat from "../../../constants/gouvernorat";
// import villes from "../../../constants/villes";
// import { Modal, Button, InputNumber } from "antd";
// import { Form, Input, Select} from "antd";
// import * as actions from "../../../redux/actions/centers";

// function UpdateCenter() {
//   const isModalVisible = useSelector((state) => state.centers.displayUpdate);
//   const center = useSelector((state) => state.centers.selectedCenter);
//   const [cities, setCities] = useState([]);
//   const dispatch = useDispatch();

//   const closeModal = () => {
//     console.log(center)
//     dispatch(actions.setDisplayUpdate(false));
//   };
  
//   const changeGov = (gover) => { 
//     const found = villes.find((ville) => ville.gov === gover).cities;
//     setCities(found ? found : []);
//   };
 
//   const handleSubmit = async (values) => {
//     console.log(values)
//     const Updatedcenter = {
//       id:center.id,
//       name:values.name,
//       governorate: values.governorate,
//       city: values.city,
//       center_capacity: values.capacity,
//       number_vaccine: 0,
//     };
//     dispatch(actions.updateCenter(Updatedcenter));
//   };

//   return (
//     <Modal
//       title="Update new center"
//       visible={isModalVisible}
//       footer={null}
//       onCancel={closeModal}
//     >
//       <Form
//         name="control-ref"
//         labelCol={{ span: 6 }}
//         wrapperCol={{ span: 14 }}
//         layout="horizontal"
//         onFinish={handleSubmit} 
//         initialValues={{
//           ["name"]: center.name,
//           ["governorate"]: center.governorate,
//           ["city"]: center.city,
//           ["capacity"]: center.center_capacity,
//         }}
//       >
//         <Form.Item
//           label="center_name:"
//           name="name"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="gouvernorat"
//           name="governorate"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select onChange={changeGov}>
//             <Select.Option>--Choose Governorate--</Select.Option>
//             {gouvernorat?.map((gov, key) => {
//               return (
//                 <Select.Option key={key} value={gov}>
//                   {gov}
//                 </Select.Option>
//               );
//             })}
//           </Select>
//         </Form.Item>
//         <Form.Item
//           name="city"
//           label="city"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select>
//             <Select.Option>--Choose City--</Select.Option>
//             {cities?.map((city, key) => {
//               return (
//                 <Select.Option key={key} value={city}>
//                   {city}
//                 </Select.Option>
//               );
//             })}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="center_capacity:"
//           name="capacity"
//           rules={[
//             {
//               required: true,
//               type: 'number',
//               min: 0,
//             },
//           ]}
//         >
//           <InputNumber />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" shape="round"> Update center </Button>
//       </Form>
//     </Modal>
//   );
// }
// export default UpdateCenter;
