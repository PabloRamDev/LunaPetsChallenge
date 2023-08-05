"use client";
import Form from "./Form";
import Header from "../components/Header";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const message = useAppSelector((state) => state.authReducer.value.message);

  return (
    <main className="flex flex-col h-auto gap-5 justify-center items-center p-5">
      <h1 className={`${lilita.className} text-5xl text-center`}>
        Use your <span className="text-red-400">email</span> to login
      </h1>
      <div className="h-auto bg-white flex flex-col items-center justify-around dark:bg-slate-800 p-10 rounded-3xl">
        <Form />
        <Image
          style={{width: 'auto', height: 'auto'}}
          src={"/loginimage.png"}
          height={150}
          width={150}
          alt={"cat image"}
        />
        
        {message != '' ? <p className="text-red-500">{message}</p>: null}
      </div>
    </main>
  );
}
