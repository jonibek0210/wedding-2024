import { useState, useEffect } from "react";

import { motion } from "framer-motion";

interface CounterProps { }

const Counter: React.FC<CounterProps> = () => {
   const [stop, setStop] = useState(false);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   useEffect(() => {
      const date = new Date("10/02/2024 19:00:00");
      console.log(new Date());

      const interval = setInterval(() => {
         const now = new Date();
         const difference = date.getTime() - now.getTime();

         const d = Math.floor(difference / (1000 * 60 * 60 * 24));
         setDays(d);

         const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         setHours(h);

         const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
         setMinutes(m);

         const s = Math.floor((difference % (1000 * 60)) / 1000);
         setSeconds(s);

         if (d === -1 && h === -1 && m === -1 && s === -1) {
            setStop(true);
         }
      }, 1000);
   });

   return (
      <div className="custom-container">
         <div className="relative mb-10 px-5">
            <motion.h2
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="text-[50px] text-center relative z-10"
            >
               ЖДЕМ ВАС
            </motion.h2>
            <div className="absolute top-5 -right-2">
               <p className="text-8xl font-[champignon] font-normal leading-[.8] text-center text-gray-500">
                  через<span className="font-[Jony]">...</span>
               </p>
            </div>
         </div>
         <div className="flex justify-center gap-5 px-5 pt-20 pb-10 border-t border-gray-300">
            <motion.div
               initial={{ y: 40, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="flex flex-col items-center"
            >
               <div className="">
                  <span className="text-[30px] leading-5">{days}</span>
               </div>
               <div className="">
                  <span className="text-xs">Дней</span>
               </div>
            </motion.div>
            <motion.div
               initial={{ y: 40, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0.1,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="flex flex-col items-center"
            >
               <div className="">
                  <span className="text-[30px] leading-5">{hours}</span>
               </div>
               <div className="">
                  <span className="text-xs">Часов</span>
               </div>
            </motion.div>
            <motion.div
               initial={{ y: 40, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0.2,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="flex flex-col items-center"
            >
               <div className="">
                  <span className="text-[30px] leading-5">{minutes}</span>
               </div>
               <div className="">
                  <span className="text-xs">Минут</span>
               </div>
            </motion.div>
            <motion.div
               initial={{ y: 40, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0.3,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="flex flex-col items-center"
            >
               <div className="">
                  <span className="text-[30px] leading-5">{seconds}</span>
               </div>
               <div className="">
                  <span className="text-xs">Секунд</span>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default Counter;
