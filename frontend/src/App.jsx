import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
})
function App() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('')
  const [isUsernameSet, setIsUsernameSet] = useState(false)

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server')
    })

    const handleMessageReceive = (data) => {
      setMessages([...messages, data])
    }
    socket.on('receiveMessage', handleMessageReceive)

    return () => {
      socket.off('receiveMessage', handleMessageReceive)
    }
  }, [messages])

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', message)
      setMessage('')
    }
  }

  const setUser = () => {
    if (username.trim()) {
      socket.emit('setUsername', username)
      setIsUsernameSet(true)
    }
  }

  return (
    <>
      <div className='bg-blue-50 text-black w-screen h-screen m-0 text-center'>
        <h1 className='text-4xl m-5'>Real Time Chat App</h1>
        {!isUsernameSet ? (
          <div className='w-96 m-auto'>
            <input type='text' value={username} className='w-1/2 m-5 border border-blue-200 p-3 rounded' placeholder='Enter your username' onChange={(e) => { setUsername(e.target.value) }} />
            <button className='bg-blue-500 text-white p-3 rounded-lg' onClick={setUser}>Start Chatting</button>
          </div>
        ) : (
          <>
            <div className='messages-container m-auto w-4xl '>
              {
                messages && messages.map((msg, index) => {
                  return (
                    <p key={index} className='bg-blue-200 p-5 rounded m-2 w-fit'>
                      <strong>{msg.username}: </strong>{msg.message}</p>
                  )
                })
              }
            </div>
            <input type='text' value={message} className='w-1/2 m-5 border border-blue-200 p-3 rounded' placeholder='Type your message..' onChange={(e) => { setMessage(e.target.value) }} />
            <button className='bg-blue-500 text-white p-3 rounded-lg' onClick={sendMessage}>Send</button></>
        )}

      </div>

    </>
  )
}

export default App
