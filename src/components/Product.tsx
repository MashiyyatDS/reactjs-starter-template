interface Props {
    product: {
        id: number
        name: string
        created_at: String
        updated_at: String
    }
}

export default function Country({ product }: Props) {
    return (
        <div className='card m-1'>
            <div className='card-header bg-secondary text-white'>{product.name}</div>

            <div className='card-body'>{product.created_at}</div>
        </div>
    )
}
