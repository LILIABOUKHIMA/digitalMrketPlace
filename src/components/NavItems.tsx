"use client"
import { ProductCategories } from '@/lib/definitions'
import React, { useRef, useState } from 'react'
import { Button } from './ui/button'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/onclick-ouside'

const NavItems = () => {
    const [activeIndex,setActiveIndex]=useState<null | number>(null)
    const isAnyOpen= activeIndex!==null
    const navRef=useRef<HTMLDivElement | null>(null)
    useOnClickOutside(navRef,()=>setActiveIndex(null))
  return (
    <div className='ml-8 flex  gap-4 h-full ' ref={navRef}>

{ProductCategories.map((item,index)=>{
    const handleOpen = ()=>{
        if(activeIndex=== index){
            setActiveIndex(null)
        }
        else{
            setActiveIndex(index)
        }

    }
    const isOpen = index===activeIndex;

    return (
<NavItem category={item} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isOpen} key={item.value}/>
            
    )
})}
    </div>
  )
}

export default NavItems