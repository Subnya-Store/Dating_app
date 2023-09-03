import React, { useState } from 'react'
import axios from 'axios'

export default function Testing() {
    const [data, setData] = useState({})
    const [user_id, setuser_id] = useState({})
    const [ID, setID] = useState({})
    const hitApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/15')
            .then(x => console.log(x))
            .catch(x => console.log(x))
    }
    console.log(data)
    return (
        <div>
            <div>testing api</div>
            <button onClick={() => hitApi()}>Login</button>
            <div>
                {/* {
                    data.map(x=>(
                        <div className='border border-red-300'>
                            name : {x.name}<br/>
                            username : {x.username}
                        </div>
                    ))
                } */}
                <input type='text' placeholder='User id' onChange={e => setuser_id(e.target.value)} />
                <input type='text' placeholder='id' onChange={e => setID(e.target.value)} />
            </div>
        </div>
    )
}
