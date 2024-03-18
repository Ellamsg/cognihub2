// components/AnimatedCard.js
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const AnimatedCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 200, rotateX: 20, rotateY: -20 }}
      animate={controls}
    >
      {/* Your card content goes here */}
      <div style={{ width: '300px', height: '400px', background: 'blue' }}>
        Animated Card Content
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
