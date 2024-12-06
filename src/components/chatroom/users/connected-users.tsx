import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import UserCard from './user-card'

export default function ConnectedUsers() {
  
  return (
    <Card className='flex-1'>
    <CardHeader>
      <CardTitle>Connected Users</CardTitle>
      <CardDescription> Users Connected</CardDescription>
    </CardHeader>
    <Separator/>
    <CardContent className='flex flex-col gap-2 pt-4'>
      {/* {connectedUsers.map((user) => (
          <UserCard user={user} key={user} />
      ))} */}
    </CardContent>
  </Card>
  )
}
