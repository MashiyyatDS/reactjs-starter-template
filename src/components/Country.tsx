interface Props {
    country: {
        name: string
        phone: string
        code: string
        native: string
    }
}

export default function Country({ country }: Props) {
    return (
        <div className='card m-1'>
            <div className='card-header'>{country.name}</div>

            <div className='card-body'>{country.phone}</div>
        </div>
    )
}
