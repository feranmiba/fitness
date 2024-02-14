import { useState, useEffect } from "react";
import { FaAlignRight, FaArrowRight } from "react-icons/fa6";
import { motion, useAnimate, usePresence } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";

const container = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, scale: 0.2 }
  };
  
  const item = {
    hidden: { y: 10, x: 20, opacity: 0,  },
    visible: {
      y: 0,
      x: 0,
      opacity: 1
    },
  };


  const remove = {
    hidden: {
        opacity: 0,
        scale: 0.2
    },
    transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
  };

  const mobileNAv = [
    { 
        id: 1,
        navItem: "Connect"
    },
    { 
        id: 1,
        navItem: "Discover"
    },
    { 
        id: 1,
        navItem: "Health"
    },
    { 
        id: 1,
        navItem: "Subscribe"
    },
  ]



export default function MobileNavbar (){

    const [visible, setVisible] = useState(Boolean)
    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()

    const toggleMenu = () => {
        setVisible(!visible)
      }


    return (
        <section className="block md:hidden">
              <div  onClick={toggleMenu} className="text-3xl">
            <FaAlignRight />
            </div>


      {visible &&(
        <main className="absolute block">
            <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=' -ml-96 fixed top-0 ' > 
          <div className='flex flex-col bg-[#EFF1DE] items-start justify-start w-[900px] z-50  h-[100vh] pt-10 pl-8  gap-7 md:hidden'>
            <motion.p onClick={toggleMenu} className="text-2xl font-extrabold" variants={container} exit="exit"><IoCloseCircleSharp /></motion.p>
          {mobileNAv.map((mobile) => ( <motion.button variants={item} className="flex gap-5">{mobile.navItem} <FaArrowRight /></motion.button>))}
            </div> </motion.div>

        </main>)},
        </section>
    )
}