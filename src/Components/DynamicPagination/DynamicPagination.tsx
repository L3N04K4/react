import { FC, useEffect, useState } from "react"
import axios from "axios"
import { useInView } from "react-intersection-observer"
import { CardUniversity } from "./CardUniversity"
import { IUniversity } from "../../interfaces/IUniversity"
import { PaginationContainer, Pagination, LoadingText, LoadingInView } from './DynamicPagination.styled'

const LIMIT_LIST_SCHOOL = 15

export const DynamicPagination: FC = () => {
    const [currentPage, setPage] = useState<number>(1)
    const [dataSource, setDataSource] = useState<IUniversity[]>([])
    const [loading, setLoading] = useState(false)

    const fetchUniversities = async (currentPage: number, limit: number) => {
        try {
            setLoading(true)
            const offset = (currentPage - 1) * limit
            const response = await axios.get(
                `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`
            )

            setDataSource((prev) => [...prev, ...response.data])
        } catch (error) {
            console.log('Error fetching universities:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUniversities(currentPage, LIMIT_LIST_SCHOOL)
    }, [currentPage])
    
    const { ref, inView } = useInView({
        threshold: 1.0,
    })

    useEffect(() => {
        if (inView && !loading) {
            setPage((prev: number) => prev + 1)
        }
    }, [inView, loading])

  return (
        <PaginationContainer>
            <Pagination>
                { dataSource.map((university) => (
                    <CardUniversity data={university} key={university.name}></CardUniversity>
                ))}
            </Pagination>
            { loading && <LoadingText>Загрузка...</LoadingText>}
            <LoadingInView ref={ref}>Дождитеcь загрузки...</LoadingInView>
        </PaginationContainer>
    )
}