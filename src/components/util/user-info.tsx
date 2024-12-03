import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card"
import { Button } from '../ui/button'

export default function UserInfo() {
    const isGuest = true


    if (isGuest) {
        return (
            <Card className='shadow-none   text-white '>
                <CardHeader className=''>
                    <CardTitle>Welcome, Guest #2434B</CardTitle>
                    <CardDescription>Sign In to get full features</CardDescription>
                </CardHeader>
                <CardFooter className='w-full'>
                    <Button className='w-full'>Sign in</Button>
                </CardFooter>

            </Card>
        )
    }
  return (
    <Card className='shadow-none   text-white flex items-center '>
          <div className='bg-primary h-10 w-10 rounded-full'/>
  <CardHeader className='px-0'>
    <CardTitle> @blusuede</CardTitle>
    <CardDescription>Settings</CardDescription>
  </CardHeader>

</Card>
  )
}
