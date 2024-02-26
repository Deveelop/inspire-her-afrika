import {useState} from 'react'

import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
const Header = () => {
    const [nav, setnav] = useState(true)
  const handlenav = () => { setnav(!nav) }
  return (
 

<header  className="w-[100%]  md:pl-[25px] fixed z-[100]  pt-1 pb-[21px] bg-neutral-100 justify-evenly items-center md:gap-[216px] inline-flex">
    
    <img className=" text-amber-700 md:w-[194px] h-[71px] relative" src="/logo (1).png" />
    <FaBars className=' text-black hidden ' color='black' size={35}/>
    <nav className="w-full flex flex-wrap justify-between place-items-center p-4 pt-3 md:hidden text-black">
            <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
                { !nav ? <FaTimes/> : <FaBars /> }
            </button>

            {/* <Logo /> */}

            <div className="flex">
            </div>
        </nav>
    <div className=" hidden justify-start items-center gap-[77px] md:inline-flex">
        <ul className="justify-start items-start gap-[31px] flex">
            <div className=" h-[34px] justify-end items-center flex">
                <Link to='/' className=" h-[34px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">Home</Link>
            </div>
            <div className=" h-[38px] justify-end items-center flex">
                <Link to='/about' className=" h-[38px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">About Us</Link>
            </div>
            <div className=" h-[38px] justify-end items-center flex">
                <Link to='/mentorship' className=" h-[38px] text-justify text-amber-700 text-lg font-light font-['Athiti'] leading-[37.31px]">Mentorship Program</Link>
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
 
    <nav className={ !nav ? 'fixed left-0 top-0 w-full h-screen flex md:hidden' : 'fixed hidden md:hidden'}>
            <figure className="w-[70%] h-full pb-4 bg-neutral-100 overflow-y-scroll">
                <div className="flex justify-between p-4 pl-3 mt-1 border-b-2 border-gray-400 text-yellow-950">
                    <Link to='/' className=' bg-white rounded'>
                    <span >
                    <img src='/logo.png' alt='company' className=' w-10'/>
                    </span>
                    </Link>
                    <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
                        { !nav ? <FaTimes/> : <FaBars/> }
                    </button>
                </div>

                <ul>
                   

                    <Link to='/' className='flex flex-col text-yellow-950'>
                        <p className="font-md text-[--col] p-3"> </p>
                        <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            
            <p className=' cursor-pointer ml-3 '>Home</p>
        </div>
                    </Link>
                    <Link to='/about' className='flex flex-col text-yellow-950'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>About Us</p>
        </div>
          
        </Link>
                    <Link to='/mentorship' className='flex flex-col text-yellow-950'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Mentorship Program</p>
        </div>
         
        </Link>
                    <Link to='/resources' className='flex flex-col text-yellow-950'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Resources</p>
        </div>
        </Link>
                    <Link to='/contact' className='flex flex-col text-yellow-950'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
           
            <p className=' cursor-pointer ml-3 '>Contact Us</p>
        </div>
        </Link>

                </ul>
            </figure>
            <figure className="w-[30%] h-full bg-black opacity-[0.6]"></figure>
        </nav>
</header>


  
  )
}

export default Header;