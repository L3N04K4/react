import type { ColumnsType } from 'antd/es/table';
export interface DataType {
    country: string;
    name: string;
  }

export const columns: ColumnsType<DataType> = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
  ]
  