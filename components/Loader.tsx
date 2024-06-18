import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimateProps {
   hide: boolean;
   setHide: Function;
}

const Animate: React.FC<AnimateProps> = ({ hide, setHide }) => {
   // useEffect(() => {
   //    setTimeout(() => {
   //       setHide(false);
   //    }, 5000);
   // }, []);

   return (
      <motion.div
         initial={{ opacity: 1 }}
         whileInView={{ opacity: 0 }}
         transition={{
            delay: 1,
            ease: "easeOut",
            duration: 1,
         }}
         className={`fixed top-0 left-0 z-[99] w-screen h-full duration-[3s] ease-out bg-white`}
      >
         <div className="fixed z-[100] top-1/2 left-1/2 -translate-y-1/2 -translate-x-[50%] duration-[3s] ease-out">
            <img className="w-full" src="/images/rings.png" alt="rings" />
         </div>

         {/* <motion.svg
            className={`${
               hide ? "block" : "hidden"
            } animate w-full h-full fixed z-[100] top-1/2 left-1/2 -translate-y-1/2 -translate-x-[50.5%] duration-[3s] ease-out`}
            width="392"
            height="287"
            viewBox="0 0 392 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M1.5 251C6.5 252.5 14.3248 253.637 20.179 254.146C30.607 255.053 41.4791 254.23 51.9392 254.23C95.3595 254.23 137.546 248.618 178.561 233.783C192.5 228.741 210.765 219.224 233 200.5C252 184.5 271.886 161.628 283.562 141.938C298.197 117.259 304.702 86.268 301 58.5C298.497 39.7256 287.5 17.5 272.5 9.86908C260.5 3.76434 248.5 2 239 2C228.734 2 212 13.5 207 20.5C204.5 24 202.599 26 200 31.5C198.583 34.5 197.795 36.4312 197.159 38.6631C192.5 55 192.5 55 192.5 55C192.5 55 192.159 54.2042 181.5 30C179.689 25.887 169.5 12.3691 165.5 9.86908C157.355 4.77862 121.824 3.86907 113 9.86908C100.5 18.3691 95.5106 22.444 86.5 38.6631C84 43.1631 81.1588 50.7958 79.5 61C77.3177 74.4253 76.3412 102.337 78 109.5C80.256 119.242 80.6588 126.163 83.6588 133.163C86.6588 140.163 92.8412 153.745 97 159.704C102.825 168.051 110.659 179.163 117.659 187.163C127.567 198.487 136.659 204.663 148.159 213.163C175.159 230.663 205.659 239.163 236.802 249.705C253.5 255.357 314 269 334 255C354 241 345 213.163 319.5 213.163C287.893 213.163 273 271 390 285.5"
               stroke="black"
               strokeWidth="3"
               strokeLinecap="round"
            />
         </motion.svg> */}
      </motion.div>
   );
};

export default Animate;
