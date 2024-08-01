
"use client"
import React from 'react'
import { Button } from './ui/button'
import { ProductCategories } from '@/lib/definitions'
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';


interface NavItemProps {
    category :typeof ProductCategories[number];
    handleOpen: ()=> void;
    isAnyOpen:boolean;
    isOpen:boolean;
}
const NavItem = ({category,handleOpen,isAnyOpen,isOpen}:NavItemProps) => {
  return (
    <div className=' flex'>
<div  className='flex relative items-center'>
<Button className='gap-1.5'  onClick={handleOpen} variant={"ghost"}>{category.value}  <ChevronDown className={cn('transition-all h-4 w-4 text-muted-foreground ',
   { 'rotate-180' :isOpen}
)
}/></Button></div>
{isOpen ? (
    <div  className='absolute inset-x-0  top-full bg-black   shadow'> 
    
    <div className=' absolute top-1/2 inset-x-0    ' >
    
 <div className="relative bg-white">
    <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
           <div className=" col-span-5 col-start-1 grid grid-cols-3 gap-x-8">
        {category.features.map((item,index)=>(
        <div key={index}  className='group  text-base sm:text-sm'>
           <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
<Image src={item.imageSrc} alt={item.name} fill       className='object-cover object-center' />
</div>

<Link href={item.href} className='font-medium text-gray-900 mt-6 block'>{item.name} </Link>
<p className='mt-1 text-base text-muted-foreground'> Shop now</p>
        </div>
    ))}
    </div>
        </div>
 
    </div>
 </div>
    </div>
    </div>
):null}

                </div>  
                )
}

export default NavItem