import { useState, useEffect } from "react";
import { DataType } from "../interfaces/IUniversityInfo";
import axios from "axios";

export const useData = () => {
  const LIMIT_LIST_SCHOOL = 6;
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);

  const getUniversity = async (page: number, limit: number) => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?limit=${limit}&offset=${(page - 1) * limit}`
      );
      setDataSource(response.data); 
    } catch (error) {
      console.error(`Ошибка при получении информации: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  return {
    page,
    setPage,
    loading,
    dataSource,
  };
};