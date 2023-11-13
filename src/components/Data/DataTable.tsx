import { DataTable } from '../../types/DataTable'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { productsPaginate } from '../../graphql/Product'
import useGeneratePaginationArray from '../../composables/useGeneratePaginationArray'

interface Props {
    data: DataTable
}

interface PaginatorInfo {
    count: number
    currentPage: number
    firstItem: number
    hasMorePages: boolean
    lastItem: number
    lastPage: number
    perPage: number
    total: number
}

export default function DataTable({ data }: Props) {
    const [variables, setVariables] = useState({
        first: 10,
        page: 1,
        search: '',
    })

    let { loading, data: result, refetch } = useQuery(productsPaginate, { variables })

    const [paginatorInfo, setPaginatorInfo] = useState({} as PaginatorInfo)

    const [pagination, setPagination] = useState([])

    const [tableItems, setTableItems] = useState([])

    useEffect(() => {
        if (result) {
            setTableItems(result?.productsPaginate.data)

            setPaginatorInfo(result?.productsPaginate.paginatorInfo)

            setPagination(
                useGeneratePaginationArray(result?.productsPaginate.paginatorInfo.currentPage, result?.productsPaginate.paginatorInfo.lastPage, 10)
            )
        }
    }, [result])

    const manageVariables = (e: any) => setVariables({ ...variables, first: +e.target.value })

    return (
        <div>
            <h3 className='mb-1'>{loading ? 'Loading' : data.title}</h3>

            <div className='row'>
                <div className='col-md-5'>
                    <input
                        placeholder='Search Product'
                        className='form-control mb-1'
                        defaultValue={variables.search}
                        onChange={(e) => {
                            setTimeout(() => {
                                setVariables({ page: 1, first: 10, search: e.target.value })
                            }, 1000)
                        }}
                    />
                </div>

                <div className='col-md-2'>
                    <select className='form-select' aria-label='Default select example' onChange={manageVariables}>
                        <option defaultValue='10'>10</option>
                        <option defaultValue='50'>50</option>
                        <option defaultValue='100'>100</option>
                    </select>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-primary' type='button' disabled={loading} onClick={() => refetch({})}>
                        {loading ? <span className='spinner-border spinner-border-sm' aria-hidden='true' /> : <span>Refresh</span>}
                    </button>
                </div>
            </div>

            <table className='table table-hover'>
                <thead>
                    <tr>
                        {data.header.map((header, key) => {
                            return (
                                <th scope='col' key={key}>
                                    {header.title}
                                </th>
                            )
                        })}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems.map((product, key) => {
                        return (
                            <tr key={key}>
                                {data.header.map((header, headerKey) => {
                                    return <td key={headerKey}>{product[header.key]}</td>
                                })}
                                <td>
                                    <div className='btn-group btn-group-sm' role='group' aria-label='Small button group'>
                                        <button type='button' className='btn btn-outline-primary'>
                                            Edit
                                        </button>
                                        <button type='button' className='btn btn-outline-primary'>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <nav>
                <ul className='pagination'>
                    <li className={`page-item ${loading || paginatorInfo.currentPage === 1 ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={() => setVariables({ ...variables, page: variables.page - 1 })}>
                            Previous
                        </button>
                    </li>
                    {pagination.map((page, key) => {
                        return (
                            <li
                                className={`page-item ${page === variables.page ? 'active' : ''} ${typeof page === 'string' ? 'disabled' : ''}`}
                                key={key}>
                                <button className='page-link' onClick={() => setVariables({ ...variables, page: page })}>
                                    {page}
                                </button>
                            </li>
                        )
                    })}
                    <li className={`page-item ${loading || !paginatorInfo.hasMorePages ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={() => setVariables({ ...variables, page: variables.page + 1 })}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
