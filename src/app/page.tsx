'use client'
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import UserInfo from '@/components/left-column/user-info'
import Disclaimer from '@/components/right-column/disclaimer'
import Link from 'next/link'
import ShamelessPlug from "@/components/left-column/shameless-plug"


export default function Home() {


  return (<>
    <CardHeader>
        <CardTitle>Welcome to Yap</CardTitle>
        <CardDescription>Reviving the old school online chat room</CardDescription>
      </CardHeader>
      <Separator/>
    <CardContent className="flex gap-4 flex-1 pt-4">
    <section className='flex flex-col gap-4 w-1/4'>
    <UserInfo/>
    <ShamelessPlug/>
    
    </section>

    <Separator orientation='vertical' />

    <section className="flex-1 flex flex-col gap-4 p-4 justify-center items-center bg-white/10 rounded-xl">
  <Disclaimer/>
  <Link href='/yap' className='w-full'>
  <Button className='w-full py-6 text-lg font-bold' >Join Public Chat</Button>
  </Link>
  </section>
  </CardContent>
  </>)
}

