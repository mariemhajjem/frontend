import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Input, InputNumber,Select,DatePicker, AutoComplete} from "antd"; 
import {fetchCenters} from "../../../redux/actions/centers";
import * as actions from "../../../redux/actions/users";
import gouvernorat from "../../../constants/gouvernorat";
import villes from "../../../constants/villes";
function AddVolunteers() {
  const isModalVisible = useSelector((state) => state.users.displayed);
  const [cities, setCities] = useState([]);    
  const centers =  useSelector((state) => state.centers.list);
  const dispatch = useDispatch();
   
  const changeGov = (gover) => { 
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };
  const closeModal = () => { 
    dispatch(actions.setDisplayed(false));
  }; 
  const handleSubmit = async (values) => {

    const user = {
      ...values,
      user_type:values.user_type,
      stock:values.stock,
    };
    dispatch(actions.addUser( {...user,role:"volunteer"}));
  };
  const options = centers.map(opt => (
    <Select.Option key={opt._id} value={opt.name} label={opt.name}>
      {opt.name}
    </Select.Option>
)).concat([
<Select.Option disabled key="all" className="show-all">
 Show Plus
</Select.Option>,
]);
   useEffect(() => {
    try {
      dispatch(fetchCenters());
    } catch (e) {
      console.log("errroooor");
    }
  }, []);
  return (
    <Modal
      title="Add new volunteers"
      visible={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <Form
        name="control-ref"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit} 
      ><Form.Item
      label="cin:"
      name="cin"
      rules={[
        {
          required: true,
          type: 'number',
          min: 0,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

        <Form.Item
          label="First Name:"
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
          label="Last Name:"
          name="lastname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email:"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="birthday:"
          name="birthday"
          rules={[
            {
              required: true
             // type:'DatePicker'
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="gouvernorat"
          name="governorate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={changeGov}>
            <Select.Option>--Choose Governorate--</Select.Option>
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
          label="city"
          name="city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select >
            <Select.Option>--Choose City--</Select.Option>
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
          label="centers"
          name="centers"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {/* <Select >
            <Select.Option>--Choose Center--</Select.Option>
            {centers?.map((center, key) => {
              return (
                <Select.Option key={center._id} value={center.name}>
                  {center.name}
                </Select.Option>
              );
            })}
          </Select> */}
            <AutoComplete
          dataSource={options}
          //onSelect={(e) => onSelect(e)}
          placeholder="type center name"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />
        </Form.Item>
        


        <Button type="primary" htmlType="submit" shape="round"> Add volunteers </Button>
      </Form>
    </Modal>
  );
}

export default AddVolunteers;