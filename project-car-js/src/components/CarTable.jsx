import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreAddOutlined, DeleteFilled, EditFilled, InfoCircleFilled, SearchOutlined } from '@ant-design/icons';

const api = "https://localhost:7198/api/products/";
const CarTable = () => {

const columns = [
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'image',
        render: (_, item) => <img height={50} src={item.imageUrl} alt={item.title}></img>,
    },
    {
        title: 'Title',
        dataIndex: 'name',
        key: 'title',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}$</span>,
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
        render: (text) => <span>{text}%</span>,
    },
    {
        title: 'Stock',
        dataIndex: 'quantity',
        key: 'stock',
        render: (text) =>
            text > 0 ?
                <Tag color="green">Available</Tag>
                :
                <Tag color="volcano">Out of Stock</Tag>
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/products/${record.id}`}>
                        <Button color="default" variant="outlined" icon={<InfoCircleFilled />} />
                    </Link>
                    <Link to={`/edit/${record.id}`}>
                        <Button style={{ color: '#faad14' }} variant="outlined" icon={<EditFilled />} />
                    </Link>
                    <Popconfirm
                        title="Delete the product"
                        description={`Are you sure to delete ${record.title}?`}
                        onConfirm={() => deleteItem(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button color="danger" variant="outlined" icon={<DeleteFilled />} />
                    </Popconfirm>
                </Space>
        ),
    },
];



    const [products, setProducts] = useState([]);

    // load data from server
    useEffect(() => {
        fetch(api + "all")
            .then(res => res.json())
            .then(data => {
                setProducts(data.sort((x, y) => y.id - x.id));
            });
    }, []);

    const deleteItem = (id) => {
        // TODO: HTTP delete request
        fetch(api + id, {
            method: "DELETE"
        }).then(res => {
            if (res.status === 200) {
                setProducts(products.filter(x => x.id !== id));
                message.success('Product deleted successfuly!');
            }
            else
                message.error("Something went wrong!");
        });
    }
    

    return (
        <>
        <div>
            <Link to="/create">
                <Button type="primary" icon={<AppstoreAddOutlined />} style={{ marginBottom: '16px' }}>
                    Create New Product
                </Button>
            </Link>
        </div>
        <Table columns={columns} dataSource={products} rowKey="id" />
    </>
    );
}
export default CarTable;