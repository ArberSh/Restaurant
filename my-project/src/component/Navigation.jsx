import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation() {

    const [scroll,setScroll]=useState(false)
    const [Openmenu,setOpenmenu]=useState(false)

      function Scroll() {
        if (window.scrollY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
      }

      useEffect(() => {
        window.addEventListener("scroll", Scroll);
        return () => {
          window.removeEventListener("scroll", Scroll);
        };
      }, []);


  return (
    <div className={`${scroll ? ' bg-white text-black' : 'bg-none text-white'} p-2 pb-4 px-4 flex fixed inset-x-0   justify-around items-center font-lato box-border z-100 max-[640px]:justify-between px-8`}>
        <div>
            <img src={Logo} className={`h-20 ${scroll ? 'invert-0' : 'invert' }`} alt="" />
        </div>
        <div className='max-[640px]:hidden'>
            <ul className="flex gap-10 justify-center items-center">
                <li className={`text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 ${scroll ? 'after:bg-black' : 'after:bg-white'} after:transition-all after:duration-300 hover:after:w-full`}>Home</li>
                <li className={`text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 ${scroll ? 'after:bg-black' : 'after:bg-white'} after:transition-all after:duration-300 hover:after:w-full`}>About</li>
                <li className={`text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0  ${scroll ? 'after:bg-black' : 'after:bg-white'} after:transition-all after:duration-300 hover:after:w-full`}>Contact</li>
                <li className={`text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 ${scroll ? 'after:bg-black' : 'after:bg-white'} after:transition-all after:duration-300 hover:after:w-full`}>Menu</li>
            </ul>
        </div>
        <div className='max-[640px]:hidden'>
            <div className=' p-2.5 bg-cyan-500 flex justify-center items-center text-white rounded-xl gap-2'>
            <button className="text-xl cursor-pointer text-white rounded-2xl">Book a table</button>
            <ArrowForwardIcon></ArrowForwardIcon>
            </div>
        </div>
        <div className='max-[640px]:flex'>
            <button>
                <MenuIcon sx={{ color: scroll ? 'black' : 'white', fontSize: 40 }} onClick={()=>setOpenmenu(!Openmenu)}></MenuIcon>
            </button>
        </div>
    </div>
  )
}

export default Navigation