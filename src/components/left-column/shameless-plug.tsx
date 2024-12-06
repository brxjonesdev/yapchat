import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
  

export default function ShamelessPlug() {
  return (
    <Card className='mt-auto'>
  <CardHeader>
    <CardTitle>Made with by <span className='text-cyan-400'>@brxjonesdev</span></CardTitle>
    <Link href="https://portfolio.braxtonjones.dev/"><CardDescription className='hover:underline'>See other works.</CardDescription></Link> 
  </CardHeader>
 
</Card>

  )
}
