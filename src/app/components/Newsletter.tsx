import { FaDumbbell, FaFacebookF, FaInstagram, FaPinterest, FaXTwitter, FaCopyright } from "react-icons/fa6"
import App from "./Image/app-store-png-logo-33115.png"
import Image from "next/image"


export default function Newsletter() {
    return (
        <main className="bg-[#F5F5DC]  mt-20">

            <section className="px-14 py-24">
            <div className="flex  gap-16">
                <h1 className="text-3xl flex gap-2 font-bold">GET <FaDumbbell className="mt-1" /> Fit</h1>
                <p  className="text-2xl flex gap-5 font-bold"><FaXTwitter /> <FaFacebookF /> <FaInstagram /> <FaPinterest /></p>
            </div>


            <section className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-24 mt-20">

            <div className="md:w-[80%]">
                <h1>Get wellness from by signing up for our newsletter</h1>
                <p className="mt-5">Filter out the noise and nurture your inbox with health and wellness advice that’s inclusive and rooted in medical expertise.</p>
                <div className="mt-3"><input type="text" placeholder="Your email"  className="w-[60%] px-5 py-4 border"/> <button className="bg-[#228B22] px-8 py-4 text-white">Sign Up</button></div>
                <p className="mt-2 tex-xs">Your well-being is very important to us </p>
            </div>


            <div className="flex justify-around text-base  font-medium md:w-[80%]">
                <div className="flex flex-col">
                    <a href="#">About Us</a>
                    <a href="#" className="mt-4">Contact Us</a>
                    <a href="#" className="mt-4">Pricing</a>
                    <a href="#" className="mt-4">Connect</a>
                    <a href="#" className="mt-4">Privacy Policy</a>
                    <a href="#" className="mt-4">Health Media</a>
                </div>

                <div  className="flex flex-col w-[60%]">
                                    <a href="#">About Us</a>
                                    <a href="#" className="mt-4">Contact Us</a>
                                    <a href="#" className="mt-4">Pricing</a>
                                    <p className="text-xs mt-4"> &#39;© 2024 GetFit Media LLC. All rights reserved. Our&apos; website services, content, and products are for informational purposes only. Get&apos; Fit is a website where we release the latest news on how you can better your health; we don't provide medical advice or diagnosis. See additional information. See additional information.&#39;</p>

                </div>  
            </div>


            </section>


            </section>

             {/*Fotter */}
             <footer className="bg-[#000000] text-white p-10 flex justify-between flex-wrap">
                <div>
                <h1 className="flex text-2xl font-bold gap-2">Get <FaDumbbell className="mt-1"/> Fit</h1>
                <p>Get Fit media</p>
                </div>

                <div className="flex gap-5">
                <div className="flex flex-col border-r-2 border-cyan-700">
                    <ins className="flex justify-end">
                        <a className=" border-r-2 px-3">About</a>
                        <a className=" px-3">Contact</a>
                    </ins>
                    <ins className="mt-3">
                    <a className=" border-r-2 px-3">Privacy</a>
                        <a className=" border-r-2 px-3">Health</a>
                        <a className=" border-r-2 px-3">Plans</a>
                        <a className=" px-3">Subscribe</a>
                    </ins>
                </div>

                <div className="mt-2">
                    <Image  
                    src={App}
                    alt="Get it on goggle play or Apple store"
                    width={300}
                    height={300}
                    />
                </div>

                </div>
             </footer>
             <div className="bg-[#000000] text-white flex justify-center">
               <p className="flex gap-2"><FaCopyright /> Copyright Feranmi</p> 
                </div>
        </main>
    )
}