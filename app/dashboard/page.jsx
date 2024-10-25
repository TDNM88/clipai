"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

function Dashboard() {
    const [VideoList, setVideoList] = useState([]);
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-primary'>Dashboard</h1>
                <Link href={'/dashboard/create-new'}>
                    <Button className='mt-5'>+  Create New</Button>
                </Link>
            </div>
            {/* empty state */}
            {VideoList?.length == 0 && (
                <div className='p-10'>
                    <EmptyState />
                </div>
            )}
        </div>
    )
}

export default Dashboard