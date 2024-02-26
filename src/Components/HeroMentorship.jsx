

const HeroMentorship = () => {
  return (
    <div className=' mb-20  h-[500px] md:w-full p-4 md:p-72 relative '>
    <div className=" absolute inset-0 bg-[url('/group2.png')] bg-cover bg-no-repeat bg-center bg-opacity-90"/>
      <div className=' absolute inset-0 bg-gradient-to-r from-[#D6A530] via-[#D6AD4BD7]  to-transparent opacity-90 w-full' />
    <div className=' absolute top-60 flex justify-center'>
      <div className=' grid gap-3 '>
    <h1 className='text-[#FFFFFF] text-2xl font-Athiti md:text-6xl'>Mentorship Program</h1>
   <p className='text-[#36200F] font-bold  text-xl '>We've currated a Structured Program</p>
  <div className=''>
    <button className='bg-text-white font-semibold bg-white p-3 w-32 rounded-xl' >Join Us</button>
     </div>
     </div>
     </div>
     </div>
  )
}

export default HeroMentorship;
