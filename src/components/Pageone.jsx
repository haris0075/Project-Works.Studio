import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { RiArrowDownWideFill } from "react-icons/ri";
import vid from '../images/loaderVid.mp4'

function Pageone({locomotiveScroll}) {
    const yelldiv = useRef()
    const viddiv = useRef()
    const txtdiv = useRef()
    useEffect(()=>{
        gsap.timeline().to(yelldiv.current,{
            height:0,
            display:"none",
            duration:.4,
        },"anim").to(viddiv.current,{
            height:0,
            duration:0.5,
            delay:1,
            display:"none",
            ease: 'power2.inOut',
        },"anim").to(txtdiv.current,{
            opacity:0,
            delay:1.35,
            duration:0,
            display:"none",
        },"anim").to(".btn",{
            zIndex:30,
        })
    })
  return (
    <>
        <div data-scroll data-scroll-section data-scroll-speed="-.4" id='section1' className='snap-start font-[freight-big-pro] relative h-[85vh] md:h-screen bg-[#F5E41B] flex justify-center items-center'>
            <div class="hero-text text-display is-inview text-[45px] leading-[35px] sm:text-[7vw] sm:leading-[5.3vw]  font-thin text-center  px-14 align-baseline tracking-tighter" data-scroll="" data-scroll-speed="" >
                <em>We</em><em> are a </em>CREATIVE<em> studio<br/>
                </em>DEDICATED <em>to </em>CULTURAL<br/>
                ADVANCEMENT <em>through</em> <br/>
                STRATEGY <em>and </em>DESIGN.
            </div>
            <div className=' px-7 lg:px-14 ease-linear duration-500 w-full absolute bottom-5 flex justify-between items-center'>
                <div className='left uppercase hover:underline'>
                    <h1 className='hover:underline cursor-pointer'>Contact</h1>
                </div>
                <div className='btn middle uppercase'>
                    <button onClick={()=>{
                        window.scrollTo({
                            top:window.innerHeight,
                            behavior:"smooth"
                        });
                    }}>
                        {/* <a href="#section2"> */}
                            <RiArrowDownWideFill  size={45} height={80}/>
                        {/* </a> */}
                    </button>
                </div>
                <div className='right uppercase '>
                    <h1 className='hover:underline cursor-pointer'>instagram</h1>
                </div>
            </div>
            <div  className='h-[85vh] md:h-screen w-full absolute top-0 z-10 overflow-hidden'>
                <video ref={viddiv} autoPlay loop  muted  src={vid} className='absolute top-0 left-0 h-full w-full object-cover'></video>
                <div ref={txtdiv} className='h-full w-full absolute top-0 flex justify-center items-center'>
                    <div class="hero-text text-display is-inview text-[45px] leading-[35px] sm:text-[7vw] sm:leading-[5.3vw]  font-thin text-center  px-14 align-baseline tracking-tighter text-white" data-scroll="" data-scroll-speed="" >
                        <em>We</em><em> are a </em>CREATIVE<em> studio<br/>
                        </em>DEDICATED <em>to </em>CULTURAL<br/>
                        ADVANCEMENT <em>through</em> <br/>
                        STRATEGY <em>and </em>DESIGN.
                    </div>
                </div>
            </div>
            <div ref={yelldiv} className='h-[85vh] md:h-screen w-full absolute top-0 z-20 bg-[#F5E41B]'></div>

        </div>
    </>
  )
}

export default Pageone