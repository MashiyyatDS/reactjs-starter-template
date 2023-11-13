import { useQuery, gql } from '@apollo/client'

export default function Index() {
    const countries = gql`
        query countries {
            countries {
                code
                name
                native
                phone
            }
        }
    `

    const { loading, data } = useQuery(countries)

    return (
        <div>
            <h1>{loading ? 'Loading' : 'Index Page'}</h1>
        </div>
    )
}
