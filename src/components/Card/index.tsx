interface Props {
    post: {
        body: string
        title: string
    }
}

export default function Card(props: Props) {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <h3>{props.post.title}</h3>
                    <p>{props.post.body}</p>
                </div>
            </div>
        </div>
    )
}
