import img1 from "./Image/alexandra-tran-fS3tGOkp0xY-unsplash.jpg"
import Image from "next/image"
import Services from "./Services"



export default function Featured() {
    return (
        <main  className=" m-5">
            <div>
                <h1 className="text-2xl font-bold uppercase">Featured</h1>
                <hr className="text-red"/>
            </div>
            <section className=" flex flex-wrap sm:flex-nowrap gap-6 mt-5">
            <div >
               <Image 
               src={img1}
               alt="image 1"
               width={500}
               height={500}
               />
             <h1 className="text-2xl font-bold mt-5">A letter from GET FIT Editor</h1>  
               <p className="mt-2">Fitness isn't about what you can lose. It's about what you can gain.</p>
            </div>

            <div>
                <div className="flex gap-5">
                <Image 
               src={img1}
               alt="image 1"
               width={200}
               height={200}
               /> 
               <div>
                <h1 className="text-xl font-bold md:text-2xl mt-5">A letter from GET FIT Editor</h1>  
               <p className="text-sm md:text-xl mt-2">Fitness isn't about what you can lose. It's about what you can gain.</p>
               </div>
                </div>
                <div className="flex gap-5 mt-5">
                <Image 
               src={img1}
               alt="image 1"
               width={200}
               height={200}
               /> 
               <div>
                <h1 className="text-xl font-bold md:text-2xl mt-5">A letter from GET FIT Editor</h1>  
               <p className="mt-2">Fitness isn't about what you can lose. It's about what you can gain.</p>
               </div>
                </div>



                <div className="flex gap-5 mt-5">
                <Image 
               src={img1}
               alt="image 1"
               width={200}
               height={200}
               /> 
               <div>
                <h1 className="text-xl font-bold md:text-2xl mt-5">A letter from GET FIT Editor</h1>  
               <p className="mt-2">Fitness isn't about what you can lose. It's about what you can gain.</p>
               </div>
                </div>
            </div>
            

            </section>
            <Services />
            
        </main>
    )
}