import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface TypingComponentProps {
  text: string;
  speed: number; // Typing speed in milliseconds per character
}

const Automatictype: React.FC<TypingComponentProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateText = (index: number) => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        timeoutId = setTimeout(() => updateText(index + 1), speed);
      }
    };

    updateText(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView={{
        opacity:1 ,
        y: 0
      }}
      transition={{
        duration: 0.4
      }}
    >
      {displayText}
    </motion.div>
  );
};

export default Automatictype;
