import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='p-3 px-5 items-center justify-between flex shadow-md'>
            <div className='flex items-center gap-3'>
                <Image src={'/logo.jpeg'} alt={'logo'} width={40} height={40}/>
                <h2 className='font-bold text-xl'>ClipAi</h2>
            </div>
            <div className='flex items-center gap-3'>
                <Button>Dashboard</Button>
                <UserButton/>
            </div>
        </div>
    )
}

export default Header