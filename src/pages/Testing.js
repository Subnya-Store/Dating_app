import React, { useEffect } from 'react'
import io from 'socket.io-client'
// import io from Socket

const socket = io("http://localhost:8080")
export default function Testing() {
    useEffect(() => {
        socket.on('connection', () => {
            console.log(socket.id)
        })
        socket.on('send_msg', (data) => {
            console.log('data')
        })
    }, [])
    return (
        <div>
            <button onClick={()=>socket.emit('send_msg','hello')}>
                send 
            </button>
        </div>
    )
}
