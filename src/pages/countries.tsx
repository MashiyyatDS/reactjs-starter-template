import { useState } from 'react'
import type { DataTable as DataTableType } from '../types/DataTable'
import DataTable from '../components/Data/DataTable'

export default function Countries() {
    const [tableParameters] = useState<DataTableType>({
        method: 'productsPaginate',
        title: 'Products',
        model: 'Product',
        header: [
            {
                key: 'id',
                title: 'ID',
            },
            {
                key: 'name',
                title: 'Name',
            },
            {
                key: 'created_at',
                title: 'Date Created',
            },
            {
                key: 'updated_at',
                title: 'Date Updated',
            },
        ],
    })

    return (
        <div className='container'>
            <DataTable data={tableParameters} />
        </div>
    )
}
