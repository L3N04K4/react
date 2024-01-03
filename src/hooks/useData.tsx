import { useState, useEffect } from "react";
import { DataType } from "../interfaces/IDataType";
import axios from "axios";

export const useData = () => {
  const LIMIT_LIST_SCHOOL = 6;
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(1); // Added state for total pages

  const getUniversity = async (page: number, limit: number) => {
    try {
      setLoading(true);
      const responseMax = await axios.get(`http://universities.hipolabs.com/search`);
      const totalItems = responseMax.data.length
    //   console.log(totalItems);
    setTotalPages(totalItems / limit);
      const response = await axios.get(
        `http://universities.hipolabs.com/search?limit=${limit}&offset=${(page - 1) * limit}`
      );
      setDataSource(response.data); 
    } catch (error) {
      console.error(`Ошибка при получении информации: ${error}`);
      // Handle error state or alert the user about the error
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
    LIMIT_LIST_SCHOOL,
    totalPages // Return totalPages to use for pagination
  };
};