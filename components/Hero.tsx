"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { motion } from "framer-motion";

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container py-10 max-sm:py-0 px-16">
         <div className="flex gap-5 justify-center">
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2, ease: "easeOut", duration: 1.5 }}
               className="mt-5"
            >
               <p className="text-[45px] leading-10 font-[Jony] font-semibold">
                  14
               </p>
               <p className="text-[45px] leading-10 font-[Jony] font-semibold">
                  04
               </p>
               <p className="text-[45px] leading-10 font-[Jony] font-semibold">
                  24
               </p>
            </motion.div>
            <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0, ease: "easeOut", duration: 1.5 }}
               className="max-w-[250px] w-full min-h-[300px]"
            >
               <Image
                  priority
                  className="min-h-[300px] w-full object-cover"
                  src={"/images/photo-1.jpg"}
                  width={1000}
                  height={1000}
                  alt="photo"
               />
            </motion.div>
         </div>
         <div className="mt-5 pl-9 relative">
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4, ease: "easeOut", duration: 1.5 }}
               className="w-[1px] h-72 absolute left-5 -bottom-8 bg-black"
            ></motion.div>
            <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.6, ease: "easeOut", duration: 1.5 }}
               className=""
            >
               <h1 className="text-[48px] leading-10">Jalap</h1>
               <h2 className="text-7xl font-[champignon] font-normal leading-[0.8] ">
                  and
               </h2>
               <h1 className="text-[48px] leading-8">Sevinchxon</h1>
            </motion.div>
         </div>
      </div>
   );
};

export default Hero;
