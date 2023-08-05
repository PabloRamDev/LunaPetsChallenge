import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-center md:px-20 relative ">
      <section className="grid grid-cols-2 justify-around items-center gap-10 h-auto w-full p-10">
        <div className="row-span-1 col-span-2 md:col-span-1 justify-self-end">
          <h1 className={`${lilita.className} text-5xl lg:text-7xl mb-5`}>
            Show your <span className="text-red-400">pets</span> the love they
            <span className="text-red-400"> deserve</span>
          </h1>
          <p className="text-slate-500">
            {
              "At MyPetLife, we are dedicated to enhancing the lives of your beloved furry companions. Our website offers a wide range of pet services tailored to meet the unique needs of your pets."
            }
          </p>
        </div>
        <Image
          className="col-span-2 md:col-span-1 justify-self-center p-10 md:justify-self-end md:p-0 "
          src={"/hero.png"}
          alt="pet owner"
          height={350}
          width={350}
        />

        <section
          className= "relative text-white bg-gradient-to-r from-red-400 to-red-500 shadow-lg col-span-2 rows-span-2 rounded-3xl my-2 mx-10"
        >
          <Image
            className="absolute -top-10 left-40 -my-5"
            src="/goldenretriever.png"
            height={160}
            width={160}
            alt="golden retriever"
          />
          <div className="grid grid-cols-3 rows-auto gap-3 h-full w-full p-5 items-center justify-center ">

            <div className="col-span-3 sm:col-span-1 p-2 bg-gradient-to-r h-auto from-orange-400 to-red-500 rounded-xl">
              <h4 className={`${lilita.className} text-3xl h-full cols-span-1`}>Sitting</h4>
              <p >
              Pet Sitting with Love! 🐾. Enjoy your time away knowing your pets are in safe hands.
              </p>
            </div>

            <div className="col-span-3 sm:col-span-1 p-2 bg-gradient-to-r h-auto from-red-500 to-red-500 rounded-xl">
              <h4 className={`${lilita.className} text-3xl h-full cols-span-1`}>Walks</h4>
              <p >
              Happy pets, healthy walks. Join us for joyous adventures outdoors! 🐾 Contact us today
              </p>
            </div>

            <div className="col-span-3 sm:col-span-1 p-2 bg-gradient-to-r h-auto from-red-500 to-orange-400 rounded-xl">
              <h4 className={`${lilita.className} text-3xl h-full cols-span-1`}>Sitting</h4>
              <p >
              Unleash Their Beauty! Pamper Your Pets Today. 🐾 Grooming Services Available Now
              </p>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
}
