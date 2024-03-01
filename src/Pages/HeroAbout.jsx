

const HeroAbout = () => {
  return (
    <div className=' mb-20  h-[400px] md:w-full p-4 md:p-72 relative '>
    <div className=" absolute inset-0 bg-[url('/groupshot.png')] bg-cover bg-no-repeat bg-center bg-opacity-90"/>
      <div className=' absolute inset-0 bg-gradient-to-r from-[#D6A530] via-[#D6AD4BD7]  to-transparent opacity-90 w-full' />
    <div className=' absolute top-60 flex justify-center'>
      <div className=' grid gap-3 '>
    <h1 className='text-[#361F0F] text-lg font-Athiti md:text-6xl'>Our Team</h1>
   <p className='text-white font-bold  text-2xl '>Meet the Team</p>
  <div className=''>
    <button className='bg-text-white font-semibold bg-white p-3 w-32 rounded-xl' >Volunteer</button>
     </div>
     </div>
     </div>
     </div>
  )
}

export default HeroAbout
