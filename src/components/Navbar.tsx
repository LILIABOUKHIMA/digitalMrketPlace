import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import NavItems from './NavItems'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Cart from './Cart'

const Navbar = () => {
  const user =null;
  return (
    <div className='z-50 sticky bg-white h-16 inset-0'>
<header className='relative bg-white'>

        <MaxWidthWrapper>
            <div className='bg-white h-16 border-b border-gray-200'>
<div className='flex items-center h-16'>

    <div className="logo ml-4 lg:ml-0  ">
<h1>Logo</h1>
    </div>
    <div>
      <div className='hidden lg:block lg:self-stretch'> 
      <NavItems />

      </div>
      
    </div>
    <div className='ml-auto flex items-center  justify-between  '>
      <div className='hidden lg:flex   space-x-8'>

 {
  user ? null : <Link href="/sign-in" className={buttonVariants()}>
  Sign in
  </Link>
 }  



{
  user ? <p></p>: 
    <Link className={buttonVariants({variant:"ghost"})} href="/sign-in">
Create account
</Link>
  
}

{
  user ? <span className='h-8 bg-violet-400 w-1'>

  </span> :<span className='h-8 bg-violet-200 w-[2px]'>

</span>
}

<div className='ml-4 flow-root lg-ml-6'>
  <Cart/>
</div>

      </div>
    </div>
</div>
            </div>
        </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar