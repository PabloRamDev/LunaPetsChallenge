"use client";
//hooks
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useGetSingleServiceDataQuery } from "@/redux/api";
//types
import type { SlicesState } from "@/redux/features/servicesSlice";
//components
import PayForm from "./components/PayForm";
import { SyncLoader } from "react-spinners";
import Card from "./components/Card";

const Page = ({ params }: { params: { id: string } }) => {
  const { data, error, isLoading } = useGetSingleServiceDataQuery(params.id);

 

  return (
    <div className="grid grid-cols-5 flex-col h-auto w-full gap-5 justify-center items-center px-10 py-5">
     {data?.id && <Card props={data.id} />}
      
      {data?.status =='pending' ? (
        <PayForm
          props={{ id: data?.id, email: data?.user_email, price: data?.price }}
        />
      ) : null}
    </div>
  );
};

export default Page;
