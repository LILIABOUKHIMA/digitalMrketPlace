
"use client"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import {  Fullscreen, ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator'
import { cn, FormatPrice } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

const Cart = () => {
  const itemCart=0;
  const fee=1;
  return (
    <Sheet >
        <SheetTrigger className='group flex -m-2 items-center p-2'>


            <ShoppingCart className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500' aria-hidden="true"/>
            <span className='text-gray-700 group-hover:text-gray-900'>
0
            </span>
        </SheetTrigger>
       <SheetContent className='flex flex-col pr-0 sm:max-w-xl'>


        <SheetHeader>
           <SheetTitle> Cart(0)</SheetTitle>
        </SheetHeader>
        {itemCart >0 ? (
          <>
          
          <div className='flex  flex-col w-full pr-6'>

  Cart items
</div>

<div className='pr-6 space-y-4  '>
<Separator/>
<div className='space-y-1.5'>
<div className='flex  text-sm  '>
<span  className='flex-1'> Shipping</span>
<span> Free</span>
</div>
<div className='flex text-sm '>
<span  className='flex-1'> Transaction fee</span>
<span>{ FormatPrice(fee)}</span>
</div>
<div className='flex text-sm '>
<span  className='flex-1'> Transaction fee</span>
<span>{ FormatPrice(fee)}</span>
</div>
</div>
<SheetFooter className=''>


  <SheetTrigger className='w-full'  > <Link href="/cart" className={buttonVariants({className:"w-full bg-black"})}>Continue to checkout</Link></SheetTrigger>
</SheetFooter>
</div>

</>
        ) : 
        
        <div className='flex flex-col items-center justify-center h-full space-y-1'>

<div className=' relative h-60 w-60 mb-12 '>
  <Image fill alt="empty card" className=' rounded-3xl' src="/cart/cartbg.jpg"     />

</div>
<div className='font-semibold text-xl'>Your cart is empty </div>
<SheetTrigger asChild>


<Link href="/products" className={cn(buttonVariants({variant:"link",size:"sm",className:"text-sm "}))}> Add products to you cart now</Link>
</SheetTrigger>
        </div>
        }
     
       </SheetContent>
    </Sheet>
  )
}

export default Cart