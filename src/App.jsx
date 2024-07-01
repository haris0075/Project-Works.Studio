import { useRef, useState } from 'react'
import { CardsSection, Footer, ImgHoverSection, NavBar, Pageone } from './components'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [count, setCount] = useState(0)
  const scrollRef = useRef(null);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="relative w-full custom-scrollbar snap-y overflow-y-scroll" data-scroll-container>
            <NavBar/>
            <Pageone locomotiveScroll/>
            <ImgHoverSection/>
            <CardsSection/>
            <Footer/>
            
      </div>
    </>
  )
}

export default App
