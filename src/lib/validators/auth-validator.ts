
import {z} from "zod"


export const AuthCredentialValidaor=z.object({
    email: z.string().email(),
    password:z.string().min(8,{message:"Password must be at least 8 characters long"})
})

export type TAuthCredentialValidaor=z.infer<
typeof AuthCredentialValidaor>