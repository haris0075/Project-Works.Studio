import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const columnOne = [
    {text:'<p>Converse <em>nextStudio</em></p>', image: 'https://works.studio/assets/imager/images/converse-nextstudio/35375/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>FUTUREVVORLD <em>Identity &amp; Website</em></p>", image: 'https://works.studio/assets/imager/images/futurevvorld/38020/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>PUBLIC.COM<em> CAMPAIGN</em></p>", image: 'https://works.studio/assets/imager/images/public/37839/public-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>Converse <em>Basketball Identity</em></p>", image:'https://works.studio/assets/imager/images/converse/38120/v1.5-converse-bball-3_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>'jeen-yuhs'<em> <br>FILM IDENTITY</em></p>", image:'https://works.studio/assets/imager/images/jeen-yuhs/35858/v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>NIKE NFL<em> <br>2022 CAMPAIGN</em></p>", image:'https://works.studio/assets/imager/images/nike-nfl-2022/37789/nike-nfl-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>NIKE <br><em>STUDIO 45</em></p>", image:'https://works.studio/assets/imager/images/nike-studio-45/3184/Nike-Studio-45-Desk_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg'},
    {text:"<p>NARS X SUSANNE BARTSCH<em> <br>ZINE</em></p>", image:"https://works.studio/assets/imager/images/nars-x-susanne-bartsch/38394/nars-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"}, 
]
const columntwo = [
    {text:"<p>Between Places <em>Visual Identity</em></p>", image:"https://works.studio/assets/imager/images/between-places/40495/WØRKS_BetweenPlaces_Cover_240219_231911_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>NIKE <br>AIR FEAR OF GOD<em> <br>IDENTITY</em></p>", image:"https://works.studio/assets/imager/images/Fear-of-God-Nike/38013/fog-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>VERSACE TRIGRECA<em> IDENTITY</em></p>", image:"https://works.studio/assets/imager/images/versace-trigerca-identity/38005/versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>The North Face Climb Festival <em>Visual Identity</em></p>", image:"https://works.studio/assets/imager/images/the-north-face-climb-festival/41520/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>CONVERSE<em> BASKETBALL HO19</em></p>", image:"https://works.studio/assets/imager/images/converse-basketball-ho19/1766/Converse-Basketball-Identity-Shoe-Photgraphy_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>ESSENTIALS <br>FEAR OF GOD<em> <br></em><em>IDENTITY</em></p>", image:"https://works.studio/assets/imager/images/essentials-fear-of-god/42214/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>THE XI <br><em>BRAND DESIGN</em></p>", image:"https://works.studio/assets/imager/images/the-xi/38084/xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>CONVERSE<em> BASKETBALL EXPLORATIONS</em></p>", image:"https://works.studio/assets/imager/images/converse-basketball-explorations/38446/freetoflow-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
]
const columnthreeOne = [
    {text:"<p>JOHN ELLIOTT<em><br>SCENES FROM <br>NEPAL</em></p>", image:"https://works.studio/assets/imager/images/john-elliott-nepal/37810/john-elliott-nepal-cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>L.E.D. Studio<br><em>Website</em></p>", image:"https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>De Cara Al Sol <em>Book Design</em></p>", image:"https://works.studio/assets/imager/images/de-cara-al-sol-book-design/39377/WØRKS_DeCaraAlSol_Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>Calvin Klein <em>Retail Concept Design</em> <br/> <br/> <p>De Cara Al Sol <em>Book Design</em></p></p>", image:"https://works.studio/assets/imager/images/john-elliott-shows/10017/John-Elliot-Shows-Experiential-Photography-00_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
]
const columnthreetwo=[
    {text:"<p>CDL <br><em>CHAMPIONSHIP <br>KIT 2021</em></p>", image:"https://works.studio/assets/imager/images/CDL-2021-champs/10987/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>Beyonce: <em>The Gift Album</em></p>", image:"https://works.studio/assets/imager/images/the-lion-king-the-gift/8572/Beyonce-Lion-King-The-Gift-Deluxe-Album-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>HERON PRESTON<em> WEBSITE</em></p>", image:"https://works.studio/assets/imager/images/heron-preston-website/39620/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {text:"<p>FEAR OF GOD<em> <br></em><em>POP UP</em></p>", image:"https://works.studio/assets/imager/images/fear-of-god-house-of-god/38170/fog-pop-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
]

function CardsSection() {
    const arref = useRef()
    const [isHovered, setisHovered] = useState(false)
    useEffect(()=>{
        const arrAnimation=()=>{
            gsap.to(arref.current,{
                y:"-10px",
                duration:1,
                repeat:-1,
                yoyo:true,
            })
        }
        arrAnimation()
    })
    // console.log(isHovered);
  return (
    <div className='snap-start min-h-screen bg-[#e1e1e1] py-5'>
        <div className="row  h-full w-full  flex flex-col md:flex-row justify-center items-center flex-wrap">
            <div className="columnone md:w-1/2 lg:w-1/3 relative pr-3 ">
                {columnOne.map((val,index)=>(
                    <div key={index} className='mt-3 w-full h-fit relative overflow-hidden p-[2px] group'>
                        <img src={val.image} alt={`Image ${index + 1}`} className={`w-full object-cover scale-100 group-hover:scale-105`} />
                        <div className='absolute left-0 top-0 h-full w-full flex justify-center items-center bg-black z-10 opacity-0 group-hover:opacity-100 transition-opacity delay-100  duration-500 px-6' style={{animation: "fadeIn 0.3s ease-in-out"}}>
                            <h1 className='text-white text-center w-[80%] font-[freight-big-pro] text-4xl uppercase' dangerouslySetInnerHTML={{ __html: val.text }}>
                                
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="columntwo md:w-1/2 lg:w-1/3 lg:pr-3">
                {columntwo.map((val,index)=>(
                    <div key={index} className='mt-3 w-fit h-fit relative overflow-hidden p-[2px] group'>
                        <img src={val.image} alt={`Image ${index + 1}`} className={`w-full object-cover scale-100 group-hover:scale-105`} />
                        <div className='absolute left-0 top-0 h-full w-full flex justify-center items-center bg-black z-10 opacity-0 group-hover:opacity-100 transition-opacity delay-100  duration-500 px-6' style={{animation: "fadeIn 0.3s ease-in-out"}}>
                            <h1 className='text-white text-center w-[80%] font-[freight-big-pro] text-4xl uppercase' dangerouslySetInnerHTML={{ __html: val.text }}>
                                
                            </h1>
                        </div>
                </div>
                ))}
            </div>
            <div className="columnthree md:w-full md:flex lg:flex-col lg:w-1/3">
                <div className="columnthreesub pr-3 lg:pr-0">
                    {columnthreeOne.map((val,index)=>(
                        <div key={index} className='mt-3 w-fit h-fit relative overflow-hidden p-[2px] group'>
                        <img src={val.image} alt={`Image ${index + 1}`} className={`w-full object-cover scale-100 group-hover:scale-105`} />
                        <div className='absolute left-0 top-0 h-full w-full flex justify-center items-center bg-black z-10 opacity-0 group-hover:opacity-100 transition-opacity delay-100  duration-500 px-6' style={{animation: "fadeIn 0.3s ease-in-out"}}>
                            <h1 className='text-white text-center w-[80%] font-[freight-big-pro] text-4xl uppercase' dangerouslySetInnerHTML={{ __html: val.text }}>
                                
                            </h1>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="columnthreesub">
                    {columnthreetwo.map((val,index)=>(
                        <div key={index} className='mt-3 w-fit h-fit relative overflow-hidden p-[2px] group'>
                        <img src={val.image} alt={`Image ${index + 1}`} className={`w-full object-cover scale-100 group-hover:scale-105`} />
                        <div className='absolute left-0 top-0 h-full w-full flex justify-center items-center bg-black z-10 opacity-0 group-hover:opacity-100 transition-opacity delay-100  duration-500 px-6' style={{animation: "fadeIn 0.3s ease-in-out"}}>
                            <h1 className='text-white text-center w-[80%] font-[freight-big-pro] text-4xl uppercase' dangerouslySetInnerHTML={{ __html: val.text }}>
                                
                            </h1>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div data-scroll data-scroll-element data-scroll-speed=".07" className="backtoptop ">
            <div className='w-full flex justify-center items-center'>
                <div className='h-16 gap-3 mt-16 mb-9'>
                    <button className='flex justify-center items-center flex-col gap-3' onClick={()=>{
                        window.scrollTo({
                            top:0,
                            behavior:"smooth",
                            easing: [0.25, 0.00, 0.35, 1.00],
                            duation: 15000,
                        })
                        }}>
                            <img ref={arref} src="https://works.studio/images/ui/icon-scroll-up-black-mobile.svg" alt="" />
                            <h1 className='uppercase text-xl'>
                                Back to top
                            </h1>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardsSection