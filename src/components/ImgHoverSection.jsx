import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'

const headings = [
  { text: 'Mineral', image: 'url(https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_1a58980f77ae6d8c6a1e26c40e92a05d.jpg)' },
  { text: 'converse', image: 'url(https://works.studio/assets/imager/images/converse-global-fa23/37951/converse-21_1a58980f77ae6d8c6a1e26c40e92a05d.jpg)' },
  { text: 'skky', image: 'url(https://works.studio/assets/imager/images/skky-partners/37986/skky-25_1a58980f77ae6d8c6a1e26c40e92a05d.jpg)' },
  { text: 'boldly', image: 'url(https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg)' },
  { text: 'u.s.Soccer', image: 'url(https://works.studio/assets/imager/images/us-soccer/38414/USS-1_240208_001956_1a58980f77ae6d8c6a1e26c40e92a05d.jpg)' },
];

const ImgHoverSection = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(headings[0].image);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentHeading((prev) => (prev + 1) % headings.length);
    }
    }, 1500);

return () => clearInterval(interval);
}, [isHovered]);

// console.log(currentHeading);
  useEffect(() => {
    setBackgroundImage(headings[currentHeading].image);
  }, [currentHeading]);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setCurrentHeading(index)
    setBackgroundImage(headings[index].image);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div data-scroll data-scroll-section data-scroll-speed=".009" id='section2'
      className="snap-start font-[freight-big-pro] relative h-screen flex items-center justify-center bg-cover bg-center transition-background duration-500 overflow-hidden ease-linear"
      style={{ backgroundImage }}
    >
      <div className="text-center space-y-4 flex flex-col justify-center items-center ease-linear">
        {headings.map((heading, index) => (
          <h1
            key={index}
            className={`group text-[14vw] leading-[10.3vw] md:text-[6vw] md:leading-[3.5vw] font-bold text-black relative ${currentHeading === index ? 'italic text-black duration-700':'not-italic text-white duration-100'} font-thin z-20 uppercase ease-linear `}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {heading.text}
            <div className={`w-[190%] h-[2.8vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${currentHeading === index ? 'opacity-100 scale-y-100':'opacity-0 scale-y-0'} opacity-0 group-hover:opacity-100 -z-10 ease-linear duration-300`} style={{background:'linear-gradient(90deg,rgba(245,228,27,0),#f5e41b 12%,#f5e41b 88%,rgba(245,228,27,0))'}}>
            </div>
            <div className={`bg-[#F5E41B] w-screen h-[2.8vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${currentHeading === index ? 'opacity-100 scale-y-100':'opacity-0 scale-y-0'} opacity-0 group-hover:opacity-100 -z-20 flex justify-center items-center ease-linear duration-300`} >
              <div className='flex justify-center items-center text-base whitespace-nowrap overflow-hidden tracking-wide '>
                <motion.h3 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration: 9}} className=' pr-2'>
                  <div class="service-titles flex gap-8" >
                    <div class="service-title">Creative Direction</div>
                    <div class="service-title">Branding &amp; Identity</div>
                    <div class="service-title">Digital Design</div>
                    <div class="service-title">Development</div>
                    <div class="service-title">Photography</div>
                  </div>        
                </motion.h3> 
                <motion.h3 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration: 9}} className=' pr-2'>
                  <div class="service-titles flex gap-4" >
                      <div class="service-title">Creative Direction</div>
                      <div class="service-title">Branding &amp; Identity</div>
                      <div class="service-title">Digital Design</div>
                      <div class="service-title">Development</div>
                      <div class="service-title">Photography</div>
                    </div>           
                </motion.h3> 
                <motion.h3 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration: 9}} className=' pr-2'>
                    <div class="service-titles flex gap-4" >
                        <div class="service-title">Creative Direction</div>
                        <div class="service-title">Branding &amp; Identity</div>
                        <div class="service-title">Digital Design</div>
                        <div class="service-title">Development</div>
                        <div class="service-title">Photography</div>
                    </div>        
                </motion.h3> 
                <motion.h3 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration: 9}} className=' pr-2'>
                    <div class="service-titles flex gap-4" >
                        <div class="service-title">Creative Direction</div>
                        <div class="service-title">Branding &amp; Identity</div>
                        <div class="service-title">Digital Design</div>
                        <div class="service-title">Development</div>
                        <div class="service-title">Photography</div>
                    </div>        
                </motion.h3> 
                
              </div>
            </div>
          </h1>
          
        ))}
      </div>
    </div>
  );
};


export default ImgHoverSection;