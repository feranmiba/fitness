"use client"

import { FaHeart, FaDumbbell, FaFacebook, FaPinterest, FaX, FaDiscord, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa6"
import { useState } from "react"
import { motion, Variants } from "framer-motion";

const buttonVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 100 },
  };


export default function Navbar() {
    const [isHovered, setHovered] = useState(false);
    const [isHoveredDiscover, setHoveredDiscover] = useState(false);
    const [isHoveredHealth, setHoveredHealth] = useState(false);



   return (
   <main className="bg-[#FFFAFA]  shadow-2xl">
    <nav className="flex justify-between px-4 md:px-14 py-5">
        <h2 className="flex gap-3 text-3xl">Get  <span className=" text-red-800"><FaDumbbell  /> </span>  Fit </h2>  


        <h1 className="flex gap-3 text-3xl">Be  
       <span className=" text-red-800"><FaHeart  /> </span> 
         healthy</h1>

        <div className=" gap-5 hidden md:flex">
            <motion.a
             onHoverStart={() => setHovered(true)}
             onHoverEnd={() => setHovered(false)}
             whileHover="hover"
            href="#">Connect</motion.a>
             <motion.a
             onHoverStart={() => setHoveredDiscover(true)}
             onHoverEnd={() => setHoveredDiscover(false)}
             whileHover="hover"
            href="#">Discover</motion.a>
             <motion.a
             onHoverStart={() => setHoveredHealth(true)}
             onHoverEnd={() => setHoveredHealth(false)}
             whileHover="hover"
            href="#">Health</motion.a>
            <a href="#">Subscribe</a>
        </div>
    </nav>





        {/*under health */}
        <div className="hidden md:block">
    <motion.div variants={buttonVariants}
          initial="hidden"
          animate={isHoveredHealth ? 'visible' : 'hidden'} className="absolute  w-full bg-white z-50 shadow-2xl py-10 ${isHoveredHealth ? 'hidden' : 'block'}">


        <section className="flex gap-20 px-14">

        <div>
            <div  className="flex border-b-2 gap-20 text-xl font-medium">
            <h1>Featured</h1>  <p>ALL</p>
            </div>

            <div className="flex gap-5 flex-col">
       <h6>  Breast Cancer</h6>   
       <h6>IBD</h6> 
       <h6>Migraine</h6> 
       <h6>Multiple Sclerosis (MS)</h6> 
       <h6>Rheumatoid Arthritis</h6> 
       <h6>Type 2 Diabetes</h6> 
       <h6>Sponsored Topics</h6> 
            </div>
        </div>


        <div>
            <div  className="flex border-b-2 justify-between w-full text-xl font-medium">
            <h1>Featured</h1>  <p>ALL</p>
            </div>

            <section className="flex justify-between gap-40">
                
            <div className="flex gap-5 flex-col">
             <h6>  Breast Cancer</h6>   
             <h6>IBD</h6> 
              <h6>Migraine</h6> 
                <h6>Multiple Sclerosis (MS)</h6> 
            <h6>Rheumatoid Arthritis</h6> 
       <h6>Type 2 Diabetes</h6> 
       <h6>Sponsored Topics</h6> 
            </div>


            
            <div className="flex gap-5 flex-col">
             <h6>  Breast Cancer</h6>   
             <h6>IBD</h6> 
              <h6>Migraine</h6> 
                <h6>Multiple Sclerosis (MS)</h6> 
            <h6>Rheumatoid Arthritis</h6> 
       <h6>Type 2 Diabetes</h6> 
       <h6>Sponsored Topics</h6> 
            </div>

            
            <div className="flex gap-5 flex-col">
             <h6>  Breast Cancer</h6>   
             <h6>IBD</h6> 
              <h6>Migraine</h6> 
                <h6>Multiple Sclerosis (MS)</h6> 
            <h6>Rheumatoid Arthritis</h6> 
       <h6>Type 2 Diabetes</h6> 
       <h6>Sponsored Topics</h6> 
            </div>


            </section>
             </div>


        </section>
    </motion.div>
    </div>


       {/* under Discover */}
       <div className="hidden md:block">
       <motion.div  variants={buttonVariants}
         initial="hidden"
          animate={isHoveredDiscover ? 'visible' : 'hidden'} className="absolute w-full bg-white z-50 shadow-2xl scale-100 py-10 ${isHoveredDiscover ? 'hidden' : 'block'}">


    <section className="flex gap-20 px-14">

  <div>
    <div  className="flex border-b-2 gap-20 text-xl font-medium">
                <h1>Wellness Topic</h1>  <p>All</p>
                </div>

                <div className="flex gap-5 flex-col">
            <h6>  Breast Cancer</h6>   
            <h6>IBD</h6> 
            <h6>Migraine</h6> 
            <h6>Multiple Sclerosis (MS)</h6> 
            <h6>Rheumatoid Arthritis</h6> 
            <h6>Type 2 Diabetes</h6> 
            <h6>Sponsored Topics</h6> 
                </div>
            </div>


        <div>
            <div  className="flex border-b-2 gap-14 text-xl font-medium">
            <h1>Product Reviews</h1>  <p>All</p>
            </div>

            <div className="flex gap-5 flex-col">
        <h6>  Breast Cancer</h6>   
        <h6>IBD</h6> 
        <h6>Migraine</h6> 
        <h6>Multiple Sclerosis (MS)</h6> 
        <h6>Rheumatoid Arthritis</h6> 
        <h6>Type 2 Diabetes</h6> 
        <h6>Sponsored Topics</h6> 
            </div>
        </div>


                <div>
            <div  className="flex border-b-2 gap-20 text-xl font-medium">
            <h1>Video Series</h1>  <p>All</p>
            </div>

            <div className="flex gap-5 flex-col">
        <h6>  Breast Cancer</h6>   
        <h6>IBD</h6> 
        <h6>Migraine</h6> 
        <h6>Multiple Sclerosis (MS)</h6> 
        <h6>Rheumatoid Arthritis</h6> 
        <h6>Type 2 Diabetes</h6> 
        <h6>Sponsored Topics</h6> 
            </div>
        </div>



        <div>
            <div  className="flex border-b-2 gap-20 text-xl font-medium">
            <h1>Nutrition</h1>  <p>All</p>
            </div>

            <div className="flex gap-5 flex-col">
        <h6>  Breast Cancer</h6>   
        <h6>IBD</h6> 
        <h6>Migraine</h6> 
        <h6>Multiple Sclerosis (MS)</h6> 
        <h6>Rheumatoid Arthritis</h6> 
        <h6>Type 2 Diabetes</h6> 
        <h6>Sponsored Topics</h6> 
            </div>
        </div>


        </section>
        </motion.div>
        </div>


        {/* under connect */}
        <div className="hidden md:block">
        <motion.div
         variants={buttonVariants}
         initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
        className="absolute  w-full bg-white z-50 shadow-2xl scale-100 py-10 px-14 ${isHovered ? 'hidden' : 'block'}"> 
        <section className="border-b-4 pb-5">
        <h1 className="text-xl font-semibold">Find The community that suits you</h1>
        <p>These communities provide meaningful connections with others with the same goals like you. Join these communities on the web or mobile app</p>
        </section>

        <section className="flex justify-around flex-wrap gap-20 text-2xl w-[50%] py-8">

            <button>Muscle</button>

            <button>Breast cancer</button>

            <button>Hips Training</button>

            <button>Muscle</button>

            <button>Nutrition</button>

            <button>Breast cancer</button>
        </section>

        <section className="border-t-4">
            <p>Folow us on all our social media handles to get more information.</p>

                <div className="flex gap-5 text-4xl py-5">
            <p><FaFacebook /></p>
            <p><FaInstagram/></p>
            <p><FaPinterest /></p>
            <p><FaTelegram /></p>
            <p><FaDiscord /></p>
            <p><FaTiktok /></p>
            </div>

        </section>

        </motion.div>
        </div>


    </main>
    )
} 