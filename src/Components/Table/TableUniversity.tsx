import { Table } from "antd";
import { useData } from "../../hooks/useData";
import { columns } from "../../interfaces/IUniversityInfo";
import styled from "styled-components";

const Button = styled.button`
  width: 30%;
  height: 100%;
  background-color: white;
  color: black;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`;

export const TableUniversity = () => {
    const { page, setPage, dataSource, loading} = useData();
    return (
      <>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <ButtonWrapper>
        <Button onClick={() => setPage(page - 1)} disabled={loading}>
          Назад
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={loading}>Вперед</Button>
      </ButtonWrapper>
      </>
    );
  };