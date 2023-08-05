import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { SlicesState } from './features/servicesSlice'
import { number } from 'yup'


export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/v1'}),
    endpoints: builder => ({
        getServicesData: builder.query<SlicesState[], string>({
            query: (email: string) => `/services/?email=${email}`,
        }),
        getSingleServiceData: builder.query<SlicesState, string>({
            query: (id: string) => `/services/${id}`
        }),
        updateService: builder.mutation<void, Pick<SlicesState, 'id'> & Partial<SlicesState>>({
            query: ({id, ...rest}) => ({
              url: `/services/${id}`,
              method: 'PATCH',
              body: rest
            })
          })
     })

})

export const { 
    useGetServicesDataQuery,
    useGetSingleServiceDataQuery,
    useUpdateServiceMutation
} = servicesApi