// this is our backend 

import { authROuter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter=router({
    // thats an api endPOint Its our server 
    // our server is this and it has 
    auth:authROuter
})
