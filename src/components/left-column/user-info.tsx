import React from 'react'
import { Card,  CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from '../ui/button'
import {nanoid} from 'nanoid'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


export default function UserInfo() {
  const defaultInfo = false
  const id = nanoid(13)

   if (!defaultInfo) {
    return (
      <Card>
  <CardHeader>
    <CardTitle>Guest #{`${id}`}</CardTitle>
    <Dialog>
  <DialogTrigger className='h-fit text-left'>
  <CardDescription className='hover:underline'>Edit Name</CardDescription>
  </DialogTrigger>
  <DialogContent>
    <section className='space-y-4'>
      <div className='space-y-1'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' type='text' placeholder='Enter your name' />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='color'>Color</Label>
        <Input id='color' type='text' placeholder='Enter color as hex (#b4dd1e)' />
      </div>
      <div className='w-full'>
        <Button className='w-full'>Save Changes</Button>
      </div>
    </section>
  </DialogContent>
</Dialog>

  </CardHeader>
</Card>
    )
   }
  return (
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
</Card>


  )
}
