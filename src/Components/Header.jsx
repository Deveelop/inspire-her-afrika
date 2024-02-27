import {useState} from 'react'

import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
const Header = () => {
    const [nav, setnav] = useState(true)
  const handlenav = () => { setnav(!nav) }
  return (
 

    <header className=' bg-neutral-100 bg-fixed w-full fixed z-50'>
      
    <div className='  items-center flex md:justify-evenly justify-between p-4  ml- mr-10'>
    <div>
   <img className=" text-amber-700 md:w-[99px] h-[29px]" src="/logo (1).png" alt='iha' />
    </div>
    <nav className=' hidden md:flex gap-8 items-center'>
     <Link to='/' className=' font-semibold text-amber-700'>Home</Link>
     <Link to='/about' className=' font-semibold text-amber-700'>About Us</Link>

      <Link to='/mentorship' className=' font-semibold text-amber-700'>Mentorship Program</Link>
      <Link to='/resources' className=' font-semibold text-amber-700'>Resources</Link>
      <Link to='/contact' className=' font-semibold text-amber-700'>Contact Us</Link>
    </nav>
    <div className='flex gap-8'>
    </div>
    <nav className="w-full flex flex-wrap justify-between place-items-center p-4 pt-3 md:hidden text-black">
          <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
              { !nav ? <FaTimes/> : <FaBars /> }
          </button>
      </nav>
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