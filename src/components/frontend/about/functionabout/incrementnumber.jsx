import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const IncrementNumberAbout = ({ endNumber }) => {
  const [number, setNumber] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  useEffect(() => {
    if (isInView) {
      controls.start({ value: endNumber, transition: { duration: 2 } });
    }
  }, [isInView, endNumber, controls]);

  return (
    <motion.div ref={ref} className="incrementnumber" animate={controls} onUpdate={(latest) => setNumber(latest.value.toFixed(0))}>
      {number}
    </motion.div>
  );
};
