import { gql } from '@apollo/client'

export const countries = gql`
    query countries {
        countries {
            code
            name
            native
            phone
        }
    }
`
