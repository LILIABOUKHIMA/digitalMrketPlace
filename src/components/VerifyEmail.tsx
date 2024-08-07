"use client"
import { trpc } from '@/trpc/client';
import { Loader2, XCircle } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';

interface VerifyEmailProps {
    token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
    const { mutate, isLoading ,status} = trpc.auth.VerifyEmail.useMutation();

    useEffect(() => {
        mutate({ token });
    }, [token]);

    if(isLoading){
        return <div className='flex flex-col items-center gap-4'>
        <Loader2 className=' animate-spin h-8 w-8 text-purple-400'/>
        <h3 className=' text-center font-semibold text-xl'>Verifying ...</h3>
        <p className='text-muted-foreground text-center'>Wait for us it won&apos;t it won&apos;t take long</p>
    </div>;
    }
    else{
        console.log("no is loading")
    }

    if (status==="error") {
        return <div className='flex flex-col items-center gap-4'>
            <XCircle className='h-8   w-8 text-red-600'/>
            <h3 className=' text-center font-semibold text-xl'>There was an error verifying your email.</h3>
            <p className='text-muted-foreground text-center'>This token is not valid or expired. Please try again.</p>
        </div>;
    }
if(status==="success"){

    return <div className='flex flex-col items-center justify-center gap-4'>
       <div className=' relative w-60 h-60'>
        <Image src="/email/emailverified.jpg" alt="emailVerified" fill/>
       </div>
<p className='font-semibold text-2xl text-center'> Your email has been verified, thank you for you time </p>
 <Link href="/sign-up" className={buttonVariants({variant:'default',className:"mt-4"})}>
 Sign in
 </Link> 
    </div>;
}

}

export default VerifyEmail;
