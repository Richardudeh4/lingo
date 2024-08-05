import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col space-y-8 max-w-[200px]'>
        <Button>
         Default
        </Button>
        <Button variant="primary">
            Primary
        </Button>
        <Button variant="primaryOutline">
            PrimaryOutline
        </Button>
        <Button variant="secondary">
           Secondary
        </Button>
        <Button variant="secondaryOutline">
           secondary Outline
        </Button>
        <Button variant="danger">
          Danger
        </Button>
        <Button variant="dangerOutline">
           danger Outline
        </Button>
        <Button variant="super">
         Super
        </Button>
        <Button variant="superOutline">
           super Outline
        </Button>
        <Button variant="ghost">  
        ghost
        </Button>
        <Button variant="sidebar">
         Sidebar
        </Button>
        <Button variant="sidebarOutline">
           sidebar Outline
        </Button>
    </div>
  )
}

export default page