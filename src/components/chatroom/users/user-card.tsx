import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function UserCard({user}: {user: string}) {
  return (
    <div key={user} className='flex items-center gap-2'>
          <div className='h-3 w-3 bg-green-400 rounded-full animate-pulse'/>
          <Badge className='w-fit'>{user}</Badge>
    </div>
  )
}
