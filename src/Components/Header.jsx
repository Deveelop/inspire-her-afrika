import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
const Header = () => {
    
  return (
 

<header className="w-[100%]  md:pl-[25px] fixed z-[100]  pt-1 pb-[21px] bg-neutral-100 justify-evenly items-center md:gap-[216px] inline-flex">
    <img className=" text-amber-700 md:w-[194px] h-[71px] relative" src="/logo (1).png" />
    <FaBars className=' text-black md:hidden ' color='black' size={35}/>
    <div className=" hidden justify-start items-center gap-[77px] md:inline-flex">
        <ul className="justify-start items-start gap-[31px] flex">
            <div className=" h-[34px] justify-end items-center flex">
                <Link to='/' className=" h-[34px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">Home</Link>
            </div>
            <div className=" h-[38px] justify-end items-center flex">
                <Link to='/about' className=" h-[38px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">About Us</Link>
            </div>
            <div className=" h-[38px] justify-end items-center flex">
                <Link to='/mentorship-program' className=" h-[38px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">Mentorship Program</Link>
            </div>
            <div className=" h-[38px] justify-end items-center flex">
                <Link to='/resources' className=" h-[38px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">Resources</Link>
            </div>
            <div className=" h-[38px] justify-end items-center flex">
                <Link to='/contact' className=" h-[38px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">Contact Us</Link>
            </div>
        </ul>
        <div className="w-[114px] h-[34px] p-2 bg-[#D6A530] rounded-[15px] justify-center items-center gap-2 flex">
            <button className="text-justify text-white text-base font-medium font-['Athiti'] leading-[37.31px]">Donate</button>
        </div>
    </div>
</header>


  
  )
}

export default Header;