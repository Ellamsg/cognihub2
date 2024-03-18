import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollZoomVideo = ({ videoSrc, posterSrc }) => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);

  useEffect(() => {
    const element = document.getElementById('video-element');
    const onScroll = () => {
      setElementTop(element.offsetTop);
      setElementBottom(element.offsetTop + element.offsetHeight);
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Adjust the initial scale value to start scaling before the video is fully visible
  const initialScale = 0.5;
  const scale = useTransform(scrollY, [elementTop, elementBottom], [initialScale, 1]);

  return (
    <div className="flex py-6 px-[30px] md:px-0 justify-center">
      <motion.video
        id="video-element"
        className="lg:rounded-[3rem] rounded-[1.4rem]"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        x5-playsinline=""
        playsinline=""
        style={{ scale: scale }}
      />
    </div>
  );
};

export default ScrollZoomVideo;
