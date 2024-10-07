import { PanelsTopLeft } from 'lucide-react'
import React from 'react'

function SideNav() {
    const MenuOption=[
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon:PanelsTopLeft
        }
    ]
    return (
        <div className='h-screen w-64 shadow-md p-5'>
            SideNav
        </div>
    )
}

export default SideNav