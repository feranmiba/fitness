// components/MobileSession.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import yoga from "./Image/yogaImage.jpg";
import { BiArrowToRight } from 'react-icons/bi';

const sessions = [
  {
    img: "./Image/yogaImage.jpg",
    session: "YOGA",
    summary: "The ultimate goal of yoga is to achieve a state of inner peace, known as “samadhi,” through the integration of our physical, mental, and spiritual selves.",
    list: [
      "Child's Pose — 5 breaths (One breath means a complete breath in and out.)",
      "Downward Facing Dog — 5 to 6 breaths",
      "Rag Doll — 5 to 6 breaths.",
      "High Plank — 10 to 15 seconds. ",
      "Chaturanga Push-Ups — 3 reps. ",
      "Upward Facing Dog — 1 full breath."
    ]
  },
  {
    img: "nutrition",
    session: "NUtrition",
    summary: "The ultimate goal of yoga is to achieve a state of inner peace, known as “samadhi,” through the integration of our physical, mental, and spiritual selves.",
    list: [
      "Child's Pose — 5 breaths (One breath means a complete breath in and out.)",
      "Downward Facing Dog — 5 to 6 breaths",
      "Rag Doll — 5 to 6 breaths.",
      "High Plank — 10 to 15 seconds. ",
      "Chaturanga Push-Ups — 3 reps. ",
      "Upward Facing Dog — 1 full breath."
    ]
  },
  {
    img: "nutrition",
    session: "NUtrition",
    summary: "The ultimate goal of yoga is to achieve a state of inner peace, known as “samadhi,” through the integration of our physical, mental, and spiritual selves.",
    list: [
      "Child's Pose — 5 breaths (One breath means a complete breath in and out.)",
      "Downward Facing Dog — 5 to 6 breaths",
      "Rag Doll — 5 to 6 breaths.",
      "High Plank — 10 to 15 seconds. ",
      "Chaturanga Push-Ups — 3 reps. ",
      "Upward Facing Dog — 1 full breath."
    ]
  }
];

const MobileSession: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sessions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sessions.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <section className='block md:hidden'>
        <div className="scroll">
          <section className="flex justify-center mt-10  w-[250%]">
            {sessions.map((sess, index) => (
              <motion.div
                key={index}
                initial={{ x: `${(index - currentIndex) * 30}%` }}
                animate={{ x: `${(index - currentIndex) * 30}%` }}
                className="text-center w-[100%] px-8 py-10 rounded-xl  transition-opacity duration-500   shadow-xl cursor-pointer bg-yoga bg-cover text-[#ebe6d1]"
              >
                <h1 className="text-3xl font-bold w-[100%]">{sess.session}<br /> <span className=" text-sm">session</span></h1>
                <div className="w-[100%]">
                  <p>{sess.summary}</p>
                  {sess.list.map((lis, idx) => (
                    <ul key={idx} className="list-disc mt-2">
                      <li>{lis}</li>
                    </ul>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default MobileSession;
