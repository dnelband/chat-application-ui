import React from 'react'
import { Message } from '@/app/types'



const MessageFeed = ({ messages }: { messages: Message[] }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message._id}>
          <p>{message.message}</p>
          <p>{message.author}</p>
          <p>{message.createdAt}</p>
        </div>
      ))}
    </div>
  )
}

export default MessageFeed
