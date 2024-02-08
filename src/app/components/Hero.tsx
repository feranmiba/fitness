'use client'


import { FaArrowRight } from "react-icons/fa6"
import Automatictype from "./Automatictype"
import Featured from "./Featured"
import fitted from "./Image/idey.jpg"
import Image from "next/image"
import { motion } from "framer-motion"



export default function Hero() {
    return (
        <motion.main>
            <div>
            <section  className="text-black flex flex-wrap-reverse justify-center items-center content-center md:flex-nowrap  gap-14 px-5 md:px-20 py-32">
            <div className="w-[100%] text-center md:text-start mt-20 md:w-[40%]">
                <h1 className="text-4xl font-extrabold">Get fit  </h1>

                <h3 className="mt-5 text-xl md:text-3xl"> <Automatictype text=" Another blabla bla blab bala bala bala bala bala abal" speed={20}/>  </h3>
                <div className="mt-7 flex justify-center md:justify-start">
                <motion.button
               whileHover={{
                x: 35,
                opacity: 0.5
               }}
                className="flex gap-2 border pr-8 pl-5 py-3 cursor-pointer  rounded-md bg-black text-white" >Get Started
                 <span

                 className="mt-1"><FaArrowRight/>
                 </span> 
                  </motion.button>

            </div>
            </div>

            <motion.div 
             initial={{ opacity: 0, x:5 }}
             animate={{ opacity: 1, x:0 }}
             transition={{ duration: 0.5 }}
           className="flex justify-center"
            >
                <Image 
                src={fitted}
                width={500}
                height={400}
                alt="fitted"
                />
            </motion.div>

          
            </section>
            </div>
            <Featured />
        </motion.main>
    )
}