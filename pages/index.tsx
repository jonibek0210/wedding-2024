"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { AiOutlineHeart } from "react-icons/ai";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calendar from "@/components/Calendar";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Animate from "@/components/Loader";
import PlanDay from "@/components/PlanDay";
import Form from "@/components/Form";

import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const [hide, setHide] = useState(true);

   useEffect(() => {
      window.addEventListener("load", () => {
         setHide(false);
      });
      const timeout = setTimeout(() => {
         setHide(false);
      }, 2000);

      return () => clearTimeout(timeout);
   }, []);

   return (
      <>
         {hide ? (
            <Animate setHide={setHide} hide={hide} />
         ) : (
            <>
               <Head>
                  <title>Улугбек & Севинчхон</title>
                  <link
                     rel="icon"
                     type="image/x-icon"
                     href="/images/rings.png"
                  ></link>
               </Head>
               <Header />
               <main className="overflow-hidden">
                  <section>
                     <Hero />
                  </section>

                  <section>
                     <div className="custom-container px-5 overflow-hidden">
                        <div className="mt-28">
                           <motion.h2
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                              className="text-7xl font-[champignon] font-normal leading-[0.8] text-center"
                           >
                              Дорогие <br /> родные и друзья!
                           </motion.h2>
                        </div>
                        <div className="w-full">
                           <motion.p
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0.3,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                              className="text-[18px] text-center mt-5"
                           >
                              В нашей жизни произойдет очень важное событие –
                              наша свадьба! Мы верим и надеемся, что этот день
                              станет красивым началом долгой и счастливой жизни.
                           </motion.p>
                        </div>
                        <div className="mt-10">
                           <motion.h2
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                              className="text-7xl font-[champignon] font-normal leading-[0.8] text-center"
                           >
                              Ждем вас
                           </motion.h2>
                        </div>
                        <div className="mb-10">
                           <motion.p
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeIn",
                                 duration: 1,
                              }}
                              className="text-center mt-5"
                           >
                              14 04 2024 года
                           </motion.p>
                        </div>
                        <motion.div
                           initial={{ x: 50, opacity: 0 }}
                           whileInView={{ x: 0, opacity: 1 }}
                           transition={{
                              delay: 0,
                              ease: "easeOut",
                              duration: 1.5,
                           }}
                           className="relative flex justify-center"
                        >
                           <Image
                              width={1000}
                              height={1000}
                              priority
                              className="max-w-[247px] min-h-[300px] w-full object-cover"
                              src={"/images/photo-2.jpg"}
                              alt="photo"
                           />
                        </motion.div>
                     </div>
                  </section>

                  <section>
                     <Calendar />
                  </section>

                  <section>
                     <div className="custom-container px-5">
                        <div className="flex justify-center">
                           <motion.h2
                              className="text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-14"
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                           >
                              Место проведение
                           </motion.h2>
                        </div>
                        <div className="mt-5">
                           <motion.p
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                              className="text-[18px] text-center"
                           >
                              Ресторан DIYORA
                           </motion.p>
                           <motion.p
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                              className="block mt-5 text-center"
                           >
                              Ул. Ислама Каримова
                           </motion.p>
                        </div>
                        <motion.div
                           initial={{ scale: 0.9, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           transition={{
                              delay: 0,
                              ease: "easeOut",
                              duration: 1,
                           }}
                           className="flex justify-center mt-8"
                        >
                           <Link
                              href={"https://yandex.uz/maps/-/CDaNeJ~n"}
                              className="relative max-w-[260px] w-full h-10 px-5 flex items-center gap-2 border border-black rounded-full"
                           >
                              Посмотреть на карте
                              <img
                                 className="animate-arrow absolute"
                                 width={"50px"}
                                 src="https://thumb.tildacdn.com/tild3864-3934-4431-b462-616565636365/-/resize/100x/-/format/webp/photo.png"
                                 alt="arrow"
                              />
                           </Link>
                        </motion.div>
                     </div>
                  </section>

                  <section>
                     <PlanDay />
                  </section>

                  <section>
                     <div className="custom-container px-5">
                        <div className="">
                           <motion.h2
                              className="text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-14"
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                           >
                              Подсказки
                           </motion.h2>
                        </div>
                        <div className="flex justify-center mt-5">
                           <AiOutlineHeart size={40} color={"gray"} />
                        </div>

                        <div className="flex justify-center mt-5">
                           <div className="max-w-[320px] w-full">
                              <motion.p
                                 initial={{ scale: 0.8, opacity: 0 }}
                                 whileInView={{ scale: 1, opacity: 1 }}
                                 transition={{
                                    delay: 0,
                                    ease: "easeOut",
                                    duration: 1,
                                 }}
                                 className="text-[20px] leading-[31px] text-center"
                              >
                                 Не ломайте голову над подарком - мы будем рады
                                 Вашим пожеланиям в конвертах.
                              </motion.p>
                           </div>
                        </div>
                        <div className="flex justify-center mt-5">
                           <AiOutlineHeart size={40} color={"gray"} />
                        </div>

                        <motion.h2
                           className="text-5xl font-[champignon] font-normal leading-[0.8] text-center mt-5"
                           initial={{ scale: 0.9, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           transition={{
                              delay: 0,
                              ease: "easeOut",
                              duration: 1,
                           }}
                        >
                           Поздравления принимаем на карту тоже
                        </motion.h2>
                        <motion.p
                           initial={{ scale: 0.8, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           transition={{
                              delay: 0,
                              ease: "easeOut",
                              duration: 1,
                           }}
                           className="text-[20px] leading-[31px] text-center mt-5"
                        >
                           Карта: 8600312912413784
                        </motion.p>
                     </div>
                  </section>

                  <section className="bg-[#ececec] overflow-hidden mt-5">
                     <Counter />
                  </section>

                  <section>
                     <Form />
                  </section>

                  <section>
                     <div className="custom-container">
                        <div className="flex flex-col items-center">
                           <motion.p
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                              className="text-[42px] font-bold text-center mt-5"
                           >
                              С ЛЮБОВЬЮ,
                           </motion.p>
                           <AiOutlineHeart
                              size={40}
                              className="heart-animate my-5"
                           />
                        </div>
                        <div className="mb-10">
                           <motion.h2
                              className="text-7xl font-[champignon] font-normal leading-[1] text-center mt-5"
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                 delay: 0,
                                 ease: "easeOut",
                                 duration: 1,
                              }}
                           >
                              Улугбек
                              <br />
                              <span className="font-[Jony]">&</span>
                              <br />
                              Севинчхон
                           </motion.h2>
                        </div>
                     </div>
                  </section>
               </main>
               <Footer />
            </>
         )}
      </>
   );
}
