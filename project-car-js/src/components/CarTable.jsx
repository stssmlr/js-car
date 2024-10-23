import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';

const api = "https://localhost:7198/api/products/all";
const columns = [
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'image',
        render: (_, item) => <img height={50} src={item.imageUrl} alt={item.title}></img>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
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
                <a>View</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const CarTable = () => {

    const [products, setProducts] = useState([]);

    // load data from server
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (<Table columns={columns} dataSource={products} rowKey="id" />);
}
export default CarTable;