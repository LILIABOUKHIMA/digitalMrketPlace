import VerifyEmail from '@/components/VerifyEmail'
import Image from 'next/image'
import React from 'react'


interface PageProps{
    searchParams:{[key:string]:string | string[]| undefined}
}
const page = ({searchParams}:PageProps) => {
    const token =searchParams.token
    const toEmail =searchParams.to
  return (
    <div className='flex flex-col items-center justify-center pt-20 lg:px-0'>
        <div className=" mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token==="string" ?(
            <div>
<VerifyEmail token={token} />

            </div>
        ):(
            <div className='flex flex-col h-full items-center text-muted-foreground '>
                <div className="relative mb-6 h-72 w-72">
                <Image  src="/email/email.jpg" fill alt="amazing" />

                </div>
                <div>
                    <h3 className='font-semibold text-center text-2xl pb-2'>
                        Check your email
              </h3>
              {
    toEmail ? (
        <p className='text-center '> We&apos;ve just sent you an email to  <span className='font-semibold'>{toEmail} </span> .</p>
    ) :        <p className='text-center'> We&apos;ve just sent you an email.</p>

}
      
                </div>
                </div> 
           
        )
         }
          </div>
    </div>
  )
}

export default page