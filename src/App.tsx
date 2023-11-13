import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import axios from 'axios'

export default function App() {
    const [items, setItems] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        setItems((data) => (data = response.data))
    })

    return (
        <div className='row'>
            {items.map((item, key) => {
                return (
                    <div className='col-md-4' key={key}>
                        <Card post={item} />
                    </div>
                )
            })}
        </div>
    )
}
