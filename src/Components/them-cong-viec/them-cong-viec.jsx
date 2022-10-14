import { Button, DatePicker, Form, Input, Select, Avatar } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

export default function ThemCongViec() {
  const [componentSize, setComponentSize] = useState("large");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="grid grid-cols-12 h-full ">
      <div className=" col-span-12 col-start-6 ml-5">
        <div className="grid grid-rows-2">
          <Avatar className="row-span-2 row-start-2" size={100} icon={<UserOutlined />} />
        </div>
        <p className="col-span-12 col-start-6 ml-2 pt-5 text-4xl">asda</p>
      </div>
      <div className="col-span-12 col-start-2">
        <div className="grid grid-rows-6">
          <div className="row-start-1 row-span-4">
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Form.Item label="Công việc">
                <Input />
              </Form.Item>
              <Form.Item label="Ca làm">
                <Select>
                  <Select.Option value="Cá1">Ca 1</Select.Option>
                  <Select.Option value="Ca2">Ca 2</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Chọn ngày">
                <DatePicker />
              </Form.Item>

              <Form.Item label="Button" htmlFor="submit">
                <Button type="primary">Button</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
