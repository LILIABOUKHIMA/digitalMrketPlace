import { viteBundler } from "@payloadcms/bundler-vite";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import {Users} from "./collections/Users"
import dotenv from "dotenv"

dotenv.config({
    path:path.resolve(__dirname,"../.env")
})

export default buildConfig({
    serverURL:process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections:[Users],
    //instead of admin we define it as Sell
    routes:{
        admin:"/sell"
    },
    admin:{
        user:"users",
        bundler:viteBundler(),
        meta:{
            titleSuffix:"- DigitalMarket",
            favicon:"/favicon.ico",
            ogImage:"thumbnail.jpg"

        },   
    },
    rateLimit:{
        max:2000,
    },
    editor:lexicalEditor({}),
    db:mongooseAdapter({
        url:process.env.MONGODB_URL!,

    }),

    typescript:{
    outputFile:path.resolve(__dirname,'payload-types.ts'),
    }

})