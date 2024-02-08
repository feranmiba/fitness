import img1 from "./Image/alexandra-tran-fS3tGOkp0xY-unsplash.jpg"
import img2 from "./Image/ifyou.jpg"
import img3 from "./Image/Different.jpg"
import img4 from "./Image/food.jpg"
import img6 from "./Image/foods.jpg"
import Image from "next/image"

const freeJournals = [
    
        {
            id: 1,
            img: img1,
            topic: "A letter from GET FIT Editor",
            summary: "Fitness isn't about what you can lose. It's about what you can gain."
        },
        {
            id: 2,
            img: img2,
            topic: "Benefit of praticing yoga",
            summary: "Fitness isn't about what you can lose. It's about what you can gain."
        },
        {
            id: 3,
            img: img3,
            topic: "A letter from GET FIT Editor",
            summary: "Fitness isn't about what you can lose. It's about what you can gain."
        },
        {
            id: 4,
            img: img1,
            topic: "A letter from GET FIT Editor",
            summary: "Fitness isn't about what you can lose. It's about what you can gain."
        },
        {
            id: 5,
            img: img4,
            topic: "A letter from GET FIT Editor",
            summary: "Fitness isn't about what you can lose. It's about what you can gain."
        },
        {
            id: 6,
            img: img6,
            topic: "A letter from GET FIT Editor",
            summary: "Fitness isn't about what you can lose. It's about what you can gain."
        },
    
]


export default function Article() {
    return (
      <main>
        <div className="mt-10">
          <h1 className="text-2xl font-bold uppercase">Free articles</h1>
          <hr className="text-red" />
        </div>
        <section className="flex flex-wrap justify-between">
          {freeJournals.map((journal) => (
            <div
              className="flex flex-wrap lg:flex-nowrap w-[45%] gap-5 mt-10 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              key={journal.id}
            >
              <Image
                src={journal.img}
                className="w-[300px] h-36"
                alt="pic"
              />
              <div>
                <h1 className="text-xl font-bold md:text-xl mt-5">{journal.topic}</h1>
                <p className="mt-2 text-sm md:text-xl">{journal.summary}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
  