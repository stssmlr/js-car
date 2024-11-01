import { LeftOutlined, PlusOutlined, UpCircleOutlined } from '@ant-design/icons';

import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    message,
    Space,
    Upload,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';




const api = "https://localhost:7198/api/products/";

const EditCar = () => {

    const [product, setCar] = useState({});
    const [categories, setCategories] = useState([]);


    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    useEffect(() => {
        fetch(api + 'categories').then(res => res.json()).then(data => {
            setCategories(data.map(x => { return { label: x.name, value: x.id } }));
        });

        fetch(api + id).then(res => res.json()).then(data => {
            setCar(data);
            form.setFieldsValue(data);
            console.log(data);
        });
    }, []);

    const onSubmit = (item) => {
        console.log(item);

         fetch(api, {
            method: "PUT",
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => {
            if (res.status === 200) {
                message.success("Product created successfuly!");
                navigate(-1);
            }
            else {
                res.json().then(res => {
                    const msg = res.errors[Object.keys(res.errors)[0]][0];
                    message.error(msg);
                })
            }
        })
    }
    return (
        
        <>
        <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>
            <h2>Edit Car</h2>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
                form={form}
                onFinish={onSubmit}
            >
                <Form.Item name="id" hidden></Form.Item>
                <Form.Item label="Name" name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name="price">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Discount" name="discount">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Quantity" name="quantity">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Category" name="categoryId">
                        <Select options={categories}></Select>
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item label="Image" name="image" valuePropName="file" getValueFromEvent={normFile}>
                    <Upload maxCount={1}>
                        <Button icon={<UpCircleOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item> */}
                <Form.Item label="Image" name="imageUrl">
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <Space>
                        <Button type="default" htmlType="reset">
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Edit
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};
export default EditCar;