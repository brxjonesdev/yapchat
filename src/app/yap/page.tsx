import React from 'react'
import {
    Card
  } from "@/components/ui/card"
import ChatRoom from '@/components/chatroom/chat/chatroom'
import ChatInput from '@/components/chatroom/chat/input'
import ConnectedUsers from '@/components/chatroom/users/connected-users'
  

export default function Chatroom() {
  return (
    <section className="flex-1 max-w-7xl mx-auto w-full flex">
        <div className='p-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-l-xl w-3/12 flex flex-col-reverse gap-4'>
      <ConnectedUsers/>
        </div>
        <div className='w-9/12'>
        <Card className='w-full h-full border-none flex flex-col'>
          <ChatRoom/>
          <ChatInput/>
</Card>

        </div>

    </section>
  )
}
