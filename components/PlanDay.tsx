import { useState, useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

interface PlanDayProps {}

const arr = [
   {
      id: 0,
      date: "12:00",
      title: "Сбор друзей и близких",
      img: "plan-4.png",
   },
   {
      id: 1,
      date: "14:00",
      title: "Регистрация",
      img: "plan.png",
   },
   {
      id: 2,
      date: "15:00",
      title: "Фуршет",
      img: "plan-2.png",
   },
   {
      id: 3,
      date: "19:00",
      title: "Вечер",
      img: "diyora.png",
   },
];

const PlanDay: React.FC<PlanDayProps> = () => {
   return (
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
               План дня
            </motion.h2>
         </div>

         <div className="flex flex-col gap-5 mt-5 relative">
            <motion.div
               initial={{ height: "30%" }}
               whileInView={{ height: "80%" }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 2,
               }}
               className="w-[1px] h-[20%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"
            ></motion.div>

            {arr.map((item: any) => {
               return (
                  <div
                     key={item.id}
                     className="flex items-center justify-between relative last"
                  >
                     <motion.div
                        initial={{
                           y: 5,
                           x: -50,
                           scale: 1,
                           opacity: 1,
                        }}
                        whileInView={{
                           y: 0,
                           x: 0,
                           scale: 1,
                           opacity: 1,
                        }}
                        transition={{
                           delay: 0,
                           ease: "easeOut",
                           duration: 1,
                        }}
                        className="w-32 h-32 rounded-full overflow-hidden aspect-[2/2]"
                     >
                        <Image
                           className="w-full h-full object-cover"
                           width={1000}
                           height={1000}
                           src={`/images/${item.img}`}
                           alt="plane day"
                        />
                     </motion.div>
                     <div className="w-[12px] h-[12px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                     <motion.div
                        initial={{
                           y: 5,
                           x: 50,
                           scale: 0.9,
                           opacity: 0,
                        }}
                        whileInView={{
                           y: 0,
                           x: 0,
                           scale: 1,
                           opacity: 1,
                        }}
                        transition={{
                           delay: 0,
                           ease: "easeOut",
                           duration: 1,
                        }}
                        className="w-2/5"
                     >
                        <p className="text-[20px] bg-[rd]">
                           {item.date}
                           <br />
                           {item.title}
                        </p>
                     </motion.div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default PlanDay;
