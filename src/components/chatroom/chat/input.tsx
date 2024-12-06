import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function ChatInput() {
  return (
    <CardFooter className='w-full p-6'>
    <form className='flex gap-4 w-full '>
      <Input type="text" placeholder="Type your message..." className='flex-grow bg-transparent text-white focus:outline-none h-12'/>
      <Button type='submit' className='bg-primary rounded-lg px-4 py-2 w-3/12'>Send</Button>
    </form>
  </CardFooter>
  )
}
