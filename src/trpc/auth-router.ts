
import { publicProcedure, router } from "./trpc";
import { getPayLoadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import  {AuthCredentialValidaor } from "../lib/validators/auth-validator";
import { z } from "zod";

export const authROuter = router({
// input takes the schema of the input
    signin: publicProcedure.input(AuthCredentialValidaor).mutation( async({input})=>{

        const {email,password}=input
        const payloadClient = await getPayLoadClient();

        const {docs:user}=await payloadClient.find({
            collection:"users",
            where:{
                email:{
                    equals:email,
                }
            }
          
        })
        if(user.length!==0){
            throw new TRPCError({message:"",code:"NOT_FOUND"})
        }
        else{
            await payloadClient.create({
                collection:"users", // we have a custom user data
                data:{email,password,role:"user"}
            })
        }
return {success:true,setToEmail:email}

    }),

    VerifyEmail:publicProcedure.input(z.object({token:z.string()}))
    .mutation(async ({input})=>{
        const {token} =input
        const payload = await getPayLoadClient()
        const isVerified= await payload.verifyEmail({
            collection:"users",
            token

        })
        if(!isVerified){
             throw new TRPCError({code:"UNAUTHORIZED",message:"Unothorized request"})
        }
        return {
            success:true
        }
        
    })
})