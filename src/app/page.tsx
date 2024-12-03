'use client'

import { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import UserInfo from '@/components/util/user-info'

const popularRooms = [
  { id: 4, name: 'PM Yap 1', members: 200 },
  { id: 5, name: 'PM Yap 2', members: 150 },
  { id: 6, name: 'PM Yap 3', members: 100 },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [newRoomName, setNewRoomName] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement search logic here
  }

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating room:', newRoomName)
    // Implement room creation logic here
    setNewRoomName('')
  }

  const handleJoinRoom = (roomId: number) => {
    console.log('Joining room:', roomId)
    // Implement room joining logic here
  }

  return (<>
    <CardHeader>
        <CardTitle>Welcome to Yap</CardTitle>
        <CardDescription>An attempt of reviving the old school online chat room</CardDescription>
      </CardHeader>
      <Separator/>
    <CardContent className="flex gap-4 flex-1 pt-4">
    <section className='flex flex-col gap-4 w-1/4'>
    <UserInfo/>
    <form onSubmit={handleSearch} className="flex flex-col gap-3">
      <Label htmlFor="search-rooms">Search for a room by code</Label>
      <Input
        type="text"
        placeholder="Search for rooms..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" variant="secondary">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </form>
    <form onSubmit={handleCreateRoom} className="flex gap-3 flex-col">
      <Label htmlFor="new-room-name">Create a new room</Label>
      <Input
        type="text"
        placeholder="New room name"
        value={newRoomName}
        onChange={(e) => setNewRoomName(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit">
        <Plus className="w-4 h-4 mr-2" />
        Create Room
      </Button>
    </form>
    </section>

    <Separator orientation='vertical' />


  <section className='flex-1 flex flex-col gap-4'>
    <div className='space-y-2'>
      <div>
      <h3 className='text-lg font-bold'>Public Yaps</h3>
      <p className='text-muted-foreground text-sm'>Join a public moderated room.</p></div>
      <div className='flex gap-4'>
        {popularRooms.map((room) => (
          <Card key={room.id} className="flex items-center justify-between gap-4 p-4 w-full">
            <div>
              <CardTitle>{room.name}</CardTitle>
              <CardDescription>{room.members} members</CardDescription>
            </div>
            <Button onClick={() => handleJoinRoom(room.id)}>Join</Button>
          </Card>
        ))}
      </div>
    </div>
    
    <div className='flex-1 bg-white/10 rounded-xl flex items-center justify-center flex-col'>
    <p>
      You are not currently in any rooms.
    </p>
    <p>
    Join a public room or create a new one.
    </p>

    </div>
    
  </section>
  </CardContent>
  </>)
}

