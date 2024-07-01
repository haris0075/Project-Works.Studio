import gsap from 'gsap'
import React, { useRef } from 'react'

function Button({btntext,size="xl",txtcolor="white",fntweight="bold",lncolor="black"}) {
    const btnline = useRef()
    const StartAnimation = ()=>{
        gsap.to(btnline.current,{
            width:"100%",
            ease: 'power1.inOut',
            duration:0.25
        })
    }
    const EndAnimation = ()=>{
        gsap.to(btnline.current,{
            width:"0%",
            ease: 'power1.inOut',
            duration:0.25
        })
    }
  return (
    <div className='h-16 flex justify-center items-center'>
        <button onMouseEnter={StartAnimation} onMouseLeave={EndAnimation} className=' w-fit p-4 flex flex-col justify-center items-center'>
            <h1 className={`text-${size} text-${txtcolor}  font-${fntweight} group uppercase`}>
                {btntext}
            </h1>
            <div ref={btnline} className='h-[1.5px] bg-gray-400 w-0'></div>

        </button>
    </div>
  )
}

export default Button