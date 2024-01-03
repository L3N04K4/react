import { Table, Pagination } from "antd";
import { useData } from "../hooks/useData";
import { columns } from "../interfaces/IDataType";



export const TableUniversity = () => {
    const { page, setPage, dataSource, loading, totalPages} = useData();
  
    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };
  
    return (
      <>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Pagination
          current={page}
          total={totalPages}
          pageSize={1}
          onChange={(newPage) => handlePageChange(newPage)}
          disabled = {loading}
        />
      </>
    );
  };