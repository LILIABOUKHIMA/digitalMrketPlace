
"use client"
import React, { Children, PropsWithChildren, useState } from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { trpc } from '@/trpc/client'
import { httpBatchLink } from '@trpc/client'
// allow us to use TRPC throught the front-end
const Providers = ({children}:PropsWithChildren) => {
    const [queryClient]=useState(()=> new QueryClient())
    const [trpcClient]=useState(()=>  trpc.createClient({
      links: [
        httpBatchLink({
          url:`${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
          fetch(url,options){

            return fetch(url,{
              ...options,
              credentials:"include",            })

          }
        })
      ]   }))

return <trpc.Provider client={trpcClient} queryClient={queryClient}>

<QueryClientProvider client={queryClient}>
{children}
</QueryClientProvider>

</trpc.Provider>
}

export default Providers