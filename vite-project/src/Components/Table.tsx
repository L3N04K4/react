import React from 'react';
import { Table, Tag, Space, TableColumnsType } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  phoneNumber: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href='.'>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href='.'>Invite {record.name}</a>
        <a href='.'>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Doe',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    phoneNumber: '1-234-567-89',
  },
  {
    key: '2',
    name: 'Jim Wow',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    phoneNumber: '1-234-567-89',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    phoneNumber: '1-234-567-89',
  },
  {
    key: '4',
    name: 'Timur',
    age: 20,
    address: 'Turkmenistan',
    tags: ['loser', 'student'],
    phoneNumber: '1-234-567-89',
  },
  {
    key: '5',
    name: 'l3n04k4',
    age: 21,
    address: 'Reutov',
    tags: ['unforgettable', 'student'],
    phoneNumber: '1-234-567-89',
  },
];

export const UsersTable = () => <Table columns={columns} dataSource={data} />;