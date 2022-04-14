// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal, Button, InputNumber } from "antd";
// import { Form, Input, Select } from "antd";
// import * as actions from "../../../redux/actions/centers";
// import * as vaccActions from "../../../redux/actions/vaccines";
// function AssignVaccine() {
//   const isModalVisible = useSelector((state) => state.centers.displayUpdateVac);
//   const center = useSelector((state) => state.centers.selectedCenter);
//   const vaccines = useSelector((state) => state.vaccines.list);
//   const dispatch = useDispatch();

//   const closeModal = () => {
//     dispatch(actions.setDisplayUpdateVac(false));
//   };
//   useEffect(() => {
//     try {
//       dispatch(vaccActions.fetchVaccines());
//     } catch (e) {
//       console.log("errroooor");
//     }
//   }, []);
//   const changeVac = (vacc) => {
//     console.log(vacc);
//     dispatch(vaccActions.setSelectedVaccine(vacc));
//   };
//   const handleSubmit = async (values) => {
//     const Updatedcenter = {
//       id: center.id,
//       name: values.name,
//       type_vaccine: values.type_vaccine,
//       number_vaccine: values.number_vaccine,
//     };
//     dispatch(
//       actions.addVaccineToCenter(
//         values.name,
//         values.type_vaccine,
//         values.number_vaccine
//       )
//     );
//   };

//   return (
//     <Modal
//       title="Assign vaccine to center"
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
//           ["type_vaccine"]: center.type_vaccine?.vaccine_type,
//           ["number_vaccine"]: center.number_vaccine,
//         }}
//       >
//         <Form.Item
//           label="Center Name"
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
//           label="Vaccine:"
//           name="type_vaccine"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select>
//             <Select.Option>--choose vaccine type--</Select.Option>
//             {vaccines?.map((vacc, key) => {
//               return (
//                 <Select.Option key={key} value={vacc.vaccine_type}>
//                   {vacc.vaccine_type}
//                 </Select.Option>
//               );
//             })}
//           </Select>
//         </Form.Item>
//         <Form.Item
//           label="Stock"
//           name="number_vaccine"
//           rules={[
//             {
//               required: true,
//               type: "number",
//               min: 0,
//             },
//           ]}
//         >
//           <InputNumber />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" shape="round">
//           {" "}
//           Assign Vaccine{" "}
//         </Button>
//       </Form>
//     </Modal>
//   );
// }

// export default AssignVaccine;
