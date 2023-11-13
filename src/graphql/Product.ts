import { gql } from '@apollo/client'

export const productsPaginate = gql`
    query productsPaginate($first: Int!, $page: Int!, $search: String) {
        productsPaginate(first: $first, page: $page, search: $search) {
            data {
                id
                name
                created_at
                updated_at
                uploads {
                    id
                }
            }

            paginatorInfo {
                count
                currentPage
                firstItem
                hasMorePages
                lastItem
                lastPage
                perPage
                total
            }
        }
    }
`
