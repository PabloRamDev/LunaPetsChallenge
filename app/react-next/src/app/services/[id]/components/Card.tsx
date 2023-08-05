
import React from 'react'
import type { SlicesState } from '@/redux/features/servicesSlice'
import { useGetSingleServiceDataQuery } from '@/redux/api'
import Link from 'next/link'

const Card = ({props}: {props: string}) => {

  const { data } = useGetSingleServiceDataQuery(props)

  return (
  <div
    className={`${
      data?.status === "paid" ? "sm:col-span-5" : "sm:col-span-2"
    } h-full bg-white border border-gray-200 rounded-lg dark:bg-cyan-900 shadow-lg justify-self-center items-center`}
  >
    <img
      className="rounded-t-lg"
      src={data?.pet_img}
      alt={data?.pet_name}
    />

    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data?.title}{" "}
        <span className="ms-1 rounded-full px-2 py-1 text-white bg-purple-500 font-light text-xl">{`$${data?.price}`}</span>{" "}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data?.pet_name}
      </p>

      {data?.status == "pending" ? (
        <button
          className="rounded-lg text-white bg-red-500 px-5"
        >
          pending
        </button>
      ) : (
        <button className="rounded-lg text-white bg-green-500 px-5">
          Paid
        </button>
      )}
    </div>
  </div>
)
}

export default Card