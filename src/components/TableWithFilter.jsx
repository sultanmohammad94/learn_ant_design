import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    filters: [
      {
        text: 'Syria',
        value: 'Syria',
      },
      {
        text: 'Lebanon',
        value: 'Lebanon',
      },
      {
        text: 'Iraq',
        value: 'Iraq',
      },
      {
        text: 'Kuwait',
        value: 'Kuwait',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.Country.startsWith(value),
    width: '30%',
  },
  {
    title: 'population',
    dataIndex: 'population',
    sorter: (a, b) => a.population - b.population,
  },
   
];
const data = [
  {
    key:"1",
    Country:"Syria",
    population:4000

  },
  {
    key:"2",
    Country:"Lebanon",
    population:3000

  },
  {
    key:"3",
    Country:"Iraq",
    population:1500

  },
  {
    key:"4",
    Country:"Kuwait",
    population:2300

  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableWithFilter = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default TableWithFilter;