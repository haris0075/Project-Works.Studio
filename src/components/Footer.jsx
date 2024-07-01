import React from 'react'
import Button from './Button'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center h-[20vh] bg-black px-5 lg:px-12'>
        <div>
            <Button btntext={"hello@works.studio"} size={"lg"} txtcolor={"white"} fntweight={"bold"}/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <Button btntext={"newsletter"} size={"lg"} txtcolor={"white"} fntweight={"bold"}/>
            <Button btntext={"instagram"} size={"lg"} txtcolor={"white"} fntweight={"bold"}/>
        </div>
    </div>
  )
}

export default Footer