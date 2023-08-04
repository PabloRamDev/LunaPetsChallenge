import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { SlicesState } from './features/servicesSlice'


export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/v1'}),
    endpoints: builder => ({
        getServicesData: builder.query<SlicesState[], string>({
            query: (email: string) => `/services/?email=${email}`,
        }),
        getSingleServiceData: builder.query<SlicesState, number>({
            query: (id: number) => `/services/${id}`
        })
     })

})

export const { 
    useGetServicesDataQuery,
    useGetSingleServiceDataQuery
} = servicesApi