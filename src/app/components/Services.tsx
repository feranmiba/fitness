import Article from "./Article"
import { motion } from "framer-motion"
import MobileSession from "./MobileSession"

export default function Services() {
    return (
        <main>
            <section>
            <div className=" mt-24">
            <h1 className="text-2xl font-bold uppercase">Top Sessions</h1>
                <hr className="text-red"/>
                </div>


            </section>
            
                
            <section className="justify-around mt-10 hidden md:flex">
                <motion.div 
                initial={{ opacity:0, scale: 0.3 }}
                whileInView={{ opacity:1, scale: 1,  }}
                transition={{ duration: 0.8 }}

                className="text-center w-[30%] px-8 py-10 rounded-xl  transition-opacity duration-500 ease-out  shadow-xl cursor-pointer bg-yoga bg-cover text-[#ebe6d1]">
                    <h1 className="text-3xl font-bold">Yoga <br /> <span className=" text-sm">session</span></h1>
                    <div className=" text-start">
                    <p>The ultimate goal of yoga is to achieve a state of inner peace, known as “samadhi,” through the integration of our physical, mental, and spiritual selves.</p>
                    <ul className=" list-disc mt-2">&lsquo;
                    <li>&lsquo;Child's Pose — 5 breaths (One breath means a complete breath in and out.)&rsquo;</li>
                        <li>Downward Facing Dog — 5 to 6 breaths. </li>
                        <li>Rag Doll — 5 to 6 breaths. </li>
                        <li>High Plank — 10 to 15 seconds. </li>
                        <li>Chaturanga Push-Ups — 3 reps. </li>
                        <li>Upward Facing Dog — 1 full breath. &rsquo;</li>
                    </ul>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ opacity:0, scale: 0.3 }}
                whileInView={{ opacity:1, scale: 1,  }}
                transition={{ duration: 0.8 }}className="text-center w-[30%] px-8 py-10 rounded-xl transition-opacity duration-500 ease-out  shadow-xl cursor-pointer bg-nutrition bg-cover text-[#ebe6d1]">
                    <h1 className="text-3xl font-bold">Nutrition<br /> <span className=" text-sm">session</span></h1>
                    <div className=" text-start">
                    <p>The ultimate goal of yoga is to achieve a state of inner peace, known as “samadhi,” through the integration of our physical, mental, and spiritual selves.</p>
                    <ul className=" list-disc mt-2">
                    <li>&lsquo;Child's Pose — 5 breaths (One breath means a complete breath in and out.)&rsquo;</li>
                        <li>Downward Facing Dog — 5 to 6 breaths. </li>
                        <li>Rag Doll — 5 to 6 breaths. </li>
                        <li>High Plank — 10 to 15 seconds. </li>
                        <li>Chaturanga Push-Ups — 3 reps. </li>
                        <li>Upward Facing Dog — 1 full breath. </li>
                    </ul>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ opacity:0, scale: 0.3 }}
                whileInView={{ opacity:1, scale: 1,  }}
                transition={{ duration: 0.8 }} className="text-center w-[30%] px-8 py-10 rounded-xl  transition-opacity duration-500 ease-out  shadow-xl cursor-pointer bg-fittness bg-cover text-[#ebe6d1]">
                    <h1 className="text-3xl font-bold">Fitness<br /> <span className=" text-sm">session</span></h1>
                    <div className=" text-start">
                    <p>The ultimate goal of yoga is to achieve a state of inner peace, known as “samadhi,” through the integration of our physical, mental, and spiritual selves.</p>
                    <ul className=" list-disc mt-2">
                    <li>&lsquo;Child's Pose — 5 breaths (One breath means a complete breath in and out.)&rsquo;</li>
                        <li>Downward Facing Dog — 5 to 6 breaths. </li>
                        <li>Rag Doll — 5 to 6 breaths. </li>
                        <li>High Plank — 10 to 15 seconds. </li>
                        <li>Chaturanga Push-Ups — 3 reps. </li>
                        <li>Upward Facing Dog — 1 full breath. </li>
                    </ul>
                    </div>
                </motion.div>
            </section>
            <MobileSession />
            <Article />
        </main>
    )
}