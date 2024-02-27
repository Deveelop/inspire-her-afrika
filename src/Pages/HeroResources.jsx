

const HeroResources = () => {
  return (
    <div className=' mb-20  h-[500px] md:w-full p-4 md:p-72 relative '>
    <div className=" absolute inset-0 bg-[url('/group2.png')] bg-cover bg-no-repeat bg-center bg-opacity-90"/>
      <div className=' absolute inset-0 bg-gradient-to-r from-[#D6A530] via-[#D6AD4BD7]  to-transparent opacity-90 w-full' />
    <div className=' absolute top-60 flex justify-center'>
      <div className=' grid gap-3 '>
    <p className='text-[#FFFFFF] md:text-lg font-semibold'>Blog posts, media from our events and testimonias from alumnis</p>
   <h1 className='text-[#36200F] font-bold  md:text-2xl '>Resources</h1>
  <div className=''>
    <form>
        <div className=" flex">
    <input placeholder="Enter your Email" className=" placeholder:text-[#874F26] placeholder:ml-3 p-1  md:p-3 md:w-[320px] rounded-xl" />
    <button className=' md:ml-3 ml-2 bg-text-white font-semibold bg-[#AF551C] text-white p-2 md:p-3 md:w-32 rounded-xl' >Subscribe</button>
   </div>
    <p className=" text-xs text-[#36200F]">For our newletters and more information</p>
     </form>
     </div>
     </div>
     </div>
     </div>
  )
}

export default HeroResources
