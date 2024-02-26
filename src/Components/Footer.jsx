import React from 'react';
import Logo from './Logo';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="md:grid md:grid-cols-3 bg-orange-300 text-white md:p-8 p-4">

      <div className="flex flex-col py-2 w-[300px]">
            <img src='/logo.png' alt='all' />
            <p className="text-yellow-950">
            We are committed to raising the next generation of female African leaders by delivering a comprehensive mentorship program designed to provide personalised guidance and support to African women who are seeking to improve their skills, knowledge, and career prospects.
            </p>
      </div>

      <figure className=" md:flex  gap-10 ">
        <div className="text-yellow-950 whitespace-nowrap">
          <h1 className="text-yellow-950 font-bold text-xl"> About Us</h1>
            <div className=" my-2">
              <p>  Our Mission </p>
              <p>  Our Vision </p>
              <p>The Team </p>
              <p> Accounts </p>
            </div>
        </div>
        
        <div className="text-yellow-950 whitespace-nowrap">
          <h1 className="text-yellow-950 font-bold text-xl"> Quick Links </h1>
            <div className=" my-2">
              <p>Become a Volunteer </p>
              <p>Contact Us </p>
              <p> Event </p>
              <p> Accounts </p>
            </div>
        </div>

        <div className="text-yellow-950 whitespace-nowrap ">
          <h1 className="text-yellow-950 font-bold text-xl"> Useful Links </h1>
            <div className="my-2">
              <p>Blog </p>
              <p>Testimonias</p>
            </div>
        </div>
       
      </figure>

      <div className="  flex-col justify-start items-start gap-5 inline-flex ml-10 py-1">
                <div className="text-yellow-950 text-lg font-semibold font-Athiti  leading-snug">Join Our Newsletter</div>
                <form className=" md:bg-white  md:w-[365px] h-[302px] left-0 top-0 relative rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] border border-yellow-950">                 
                     <div className="left-[22px] top-[42px] absolute flex-col justify-start items-start gap-4 inline-flex">
                         <div className="h-[77px] flex-col justify-start items-start gap-[17px] flex">
                             <label className="text-yellow-950 text-lg font-normal  leading-snug">Name*</label>
                            <input className="w-[319px] text-black p-2 rounded-[10px] border border-yellow-800" />
                        </div>
                        <div className="flex-col justify-start items-start gap-3.5 flex">
                            <label className="text-yellow-950 text-lg font-normal  leading-snug">Email*</label>
                             <input className="w-[321px] text-black p-2 rounded-[10px] border border-yellow-800" />
                         </div>
                     </div>
                     <div className="w-[321px] p-2 left-[22px] top-[241px] absolute bg-amber-700 rounded-[10px] justify-center items-center gap-2 inline-flex">
                         <div className="text-white text-lg font-medium  leading-snug">Subscribe</div>
                     </div>
                 </form>
             </div>
     

      <div className="w-full col-span-3 mt-6">
        <hr className="border-yellow-950 mb-6" />
        <p className="text-center text-yellow-950">
          &copy; {new Date().getFullYear()} Inspire Her Afrika. All rights reserved.
        </p>
      </div>
    </footer>
//     <div className="w-[100%] h-[549px] relative ">
//     <div className=" top-[154px] flex-row justify-start  items-start gap-[67px] inline-flex">
//         <div className="flex-col justify-start items-start gap-5 ">
//         <img className=" h-[134px]  top-[100px] " src="/logo.png" />
//     <div className="  text-yellow-950 text-lg leading-snug"></div>
    
//         </div>
//         <div className="flex-col justify-start items-start gap-5 inline-flex">
//             <div className="text-yellow-950 text-lg font-semibold font-['Athiti'] leading-snug"></div>
//             <div className="flex-col justify-start items-start gap-3.5 flex">
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//             </div>
//         </div>
//         <div className="flex-col justify-start items-start gap-5 inline-flex">
//             <div className="text-yellow-950 text-lg font-semibold font-['Athiti'] leading-snug">Quick Links</div>
//             <div className="flex-col justify-start items-start gap-[15px] flex">
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//             </div>
//         </div>
//         <div className="flex-col justify-start items-start gap-5 inline-flex">
//             <div className="text-yellow-950 text-lg font-semibold font-['Athiti'] leading-snug"> </div>
//             <div className="flex-col justify-center items-start gap-[11px] flex">
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//                 <div className="text-yellow-950 text-lg font-normal font-['Athiti'] leading-snug"></div>
//             </div>
//         </div>
//         <div className="  flex-col justify-start items-start gap-5 inline-flex">
//                 <div className="text-yellow-950 text-lg font-semibold font-Athiti  leading-snug">Join Our Newsletter</div>
//                 <div className=" bg-white  w-[365px] h-[302px] left-0 top-0 relative rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] border border-yellow-950">
                   
//                     <div className="left-[22px] top-[42px] absolute flex-col justify-start items-start gap-4 inline-flex">
//                         <div className="h-[77px] flex-col justify-start items-start gap-[17px] flex">
//                             <label className="text-yellow-950 text-lg font-normal  leading-snug">Name*</label>
//                             <input className="w-[319px] p-2 rounded-[10px] border border-yellow-800" />
//                         </div>
//                         <div className="flex-col justify-start items-start gap-3.5 flex">
//                             <label className="text-yellow-950 text-lg font-normal  leading-snug">Email*</label>
//                             <input className="w-[321px] p-2 rounded-[10px] border border-yellow-800" />
//                         </div>
//                     </div>
//                     <div className="w-[321px] p-2 left-[22px] top-[241px] absolute bg-amber-700 rounded-[10px] justify-center items-center gap-2 inline-flex">
//                         <div className="text-white text-lg font-medium  leading-snug">Subscribe</div>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     <div className="w-[191px] left-[121px] top-[444px] absolute justify-start items-start gap-[27px] inline-flex">
//         <div className="w-6 h-6 relative" />
//         <div className="w-6 h-6 relative" />
//         <div className="w-6 h-6 relative" />
//         <div className="w-6 h-6 relative" />
//     </div>




// </div>
  );
};

export default Footer;

