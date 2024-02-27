

const HeroHome = () => {
  return (
    
    <div className=' mb-20  h-[400px] md:w-full p-4 md:p-72 relative '>
    <div className=" absolute inset-0 bg-[url('groupshot.png')] md:bg-cover bg-contain bg-no-repeat bg-center bg-opacity-90"/>
      <div className='' />
    <div className=' absolute top-60 flex justify-center'>
      <div className=' grid gap-3 '>
    <h1 className='text-[#361F0F] text-2xl font-Athiti md:text-6xl'>Inspire Her Afrika</h1>
   <p className='text-white font-bold  text-xl '>Mentorship. Support. Growth.</p>
  <div className=''>
    <button className='bg-text-white font-semibold bg-white p-3 w-32 rounded-xl' >Learn More</button>
     </div>
     </div>
     </div>
     </div>
  )
}

export default HeroHome
