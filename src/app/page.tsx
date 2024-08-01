import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { Services } from '@/lib/definitions'
import { ArrowBigDown, Ghost, Headset, ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const perks: Services[] = [
  {
    name: "Wide Selection",
    icon: ShoppingCart,
    description: "Explore a vast array of digital products and services to meet your every need."
  },
  {
    name: "Top Quality",
    icon: Star,
    description: "Find only the highest quality offerings from trusted vendors to ensure your satisfaction."
  },
  {
    name: "24/7 Support",
    icon: Headset,
    description: "Benefit from round-the-clock customer support to assist you with any queries or issues."
  }
];
const Home = () => {
  return (
    <>
  
    <MaxWidthWrapper>
<div className='max-w-4xl mx-auto py-20 text-center flex flex-col items-center'>
  <h1 className='text-4xl font-bold sm:text-6xl text-gray-900  tracking-tight'>
  Discover Unlimited Potential at <span className='text-primary'> DigiHub Marketplace </span> 
  </h1>
  <p className='text-muted-foreground text-lg max-w-prose mt-6'>
  Explore top digital products and services. Join DigiHub today and unlock incredible new growth opportunities for your business.
  </p>
  <div className='flex flex-col sm:flex-row gap-4 mt-6' >

    <Link className={buttonVariants()} href={"/products"}>Browse products</Link>
    <Button variant="ghost"> See more &rarr;</Button>
  </div>
</div>
    </MaxWidthWrapper>

    <section className='bg-gray-50 border-t'>
    <MaxWidthWrapper className='py-20'>
     
<div className='grid grid-cols-1 gap-y-12 sm:gap-x-4 sm:grid-cols-2  lg:grid-cols-3  '>

{perks.map((item)=>(
  <div key={item.name} className=' flex  flex-col  items-center  text-center   sm:text-left  sm:items-start gap-y-2 sm:flex sm:gap-x-3 sm:flex-row md:flex-col lg:block lg:text-center '>

    <div className='md:flex-shrink-0 flex justify-center'>
      <div className=  ' flex justify-center  items-center bg-violet-200 w-16 h-16 rounded-full text-violet-900 '>

<item.icon className='w-1/3 h-/13'>
  </item.icon> 
</div> </div>

<div className=' flex flex-col  justify-center gap-y-1 mt-2'>
  <div className='text-base font-medium'>
{item.name}
  </div>
  <div className='text-muted-foreground'>
{item.description}
  </div>
</div>
  </div>
))}
</div>

      </MaxWidthWrapper>

    </section>
    </>
      )
}

export default Home