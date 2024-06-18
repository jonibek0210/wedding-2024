import { useEffect, useState, useRef } from "react";

import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const [active, setActive] = useState(true);
   useEffect(() => {
      const audio = document.querySelector("audio");
      if (active) {
         audio?.play();
      } else {
         audio?.pause();
      }
   }, [active]);

   return (
      <header>
         <div className="header custom-container">
            <button
               className="mr-10"
               onClick={() => {
                  setActive(!active);
               }}
            >
               {active ? (
                  <IoVolumeHigh size={30} color={"#00000030"} />
               ) : (
                  <IoVolumeMute size={30} color={"#00000030"} />
               )}
            </button>
            <audio loop autoPlay={true} src="/music/love.mp3"></audio>
         </div>
      </header>
   );
};

export default Header;
