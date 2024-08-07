"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import { AuthCredentialValidaor, TAuthCredentialValidaor } from '@/lib/validators/auth-validator'
import { trpc } from '@/trpc/client'
const Page = () => {

      const {
        register,handleSubmit,formState:{errors}
         } = useForm<TAuthCredentialValidaor>({resolver:zodResolver(
            AuthCredentialValidaor
   
         )});
// real time type update
         const {mutate,isLoading}=trpc.auth.signin.useMutation({
    
         })
            const onSubmit =({email,password}:TAuthCredentialValidaor)=>{
mutate({email,password})
        }
   
  return (
    <div className='container relative flex pt-24 flex-col items-center justify-center lg:px-0'>

<div className='mx-auto flex w-full  flex-col justify-center space-y-6 sm:w-[450px]'>



<div className="flex flex-col items-center space-y-2 text-center">
<h1>Logo</h1>
<h1 className=' text-3xl font-bold'>Create an account</h1>
<Link className={buttonVariants({variant:'link',className:"text-muted-foreground"})} href="sign-in">Already have an account? Sign-in </Link>
</div>

<div className='grid gap-2'>
    <div className="grid gap-2">
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid gap-16">
        <div className="grid gap-2  py-2">
        <Label >
Email
</Label>
<Input

{...register("email")}
placeholder='username@example.com' className={cn({
    "focus-visible:ring-red-500" :errors.email
})} />

        </div>


        <div className="grid gap-2 py-2">
        <Label >
Password
</Label>
<Input

{...register("password")}
placeholder='Password' className={cn({
    "focus-visible:ring-red-500" :errors.password
})} />

        </div>

        <Button>
            Sign up
        </Button>
        </div>
</form>
    </div>

</div>
</div>
</div>
   
  )
}

export default Page