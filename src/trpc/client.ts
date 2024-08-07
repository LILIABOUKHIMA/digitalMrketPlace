

import {createTRPCReact} from "@trpc/react-query"
import { appRouter } from "./trpc"
export const trpc=createTRPCReact<appRouter>({

})

// now the front end nows the type of the backend

// full stack safty between backend-end and front