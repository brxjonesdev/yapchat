import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
  

export default function Chatroom() {
    const yapData = {
        name: 'Yap Name',
    }

    const connectedUsers = [
        "Irene",
        "Dahyun",
        "Chaeryeong",
    ]
  return (
    <section className="flex-1 max-w-7xl mx-auto w-full flex">
        <div className='p-2 bg-white/10 rounded-bl-xl w-3/12 flex flex-col-reverse gap-4'>
        <Card className='flex-1'>
  <CardHeader>
    <CardTitle>Connected Users</CardTitle>
    <CardDescription>{connectedUsers.length} Users Connected</CardDescription>
  </CardHeader>
  <Separator/>
  <CardContent className='flex flex-col gap-2 pt-4'>
    {connectedUsers.map((user) => (
        <div key={user} className='flex items-center gap-2'>
        <div className='h-3 w-3 bg-green-400 rounded-full animate-pulse'/>
        <Badge className='w-fit'>{user}</Badge>
        </div>
    ))}
  </CardContent>
</Card>
<Button className='w-full py-6init' variant={"outline"}>Leave Room</Button>


        </div>
        <div className='w-9/12'>
        <Card className='w-full h-full border-none flex flex-col'>
  <CardHeader className='py-4'>
    <CardTitle>Super Secret Chat Room</CardTitle>
    <CardDescription>A place to tell secrets</CardDescription>
  </CardHeader>
  <CardContent className='flex-1 border-2 mx-6 p-0 rounded-lg'>
  </CardContent>
  <CardFooter className='w-full'>
    <form className='flex gap-4 p-4 w-full '>
      <Input type="text" placeholder="Type your message..." className='flex-grow bg-transparent text-white focus:outline-none'/>
      <Button type='submit' className='bg-primary rounded-lg px-4 py-2'>Send</Button>
    </form>
  </CardFooter>
</Card>

        </div>

    </section>
  )
}
