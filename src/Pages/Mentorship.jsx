import HeroMentorship from "../Components/HeroMentorship";

function Mentorship() {
  return (
    <div className=' '>
    <div className="w-[100%] bg-yellow-50 ">

    <HeroMentorship/>

    <div className=' pb-8 m-auto w-[75%] '>
    <div className="  items-center flex flex-col justify-center leading-9  ">
        <h1 className=" text-center font-bold md:text-xl text-lg">What we Offer</h1>
        <div className=" w-[80%] md:w-[326px] h-[0px] m-4 border-[3px] border-[#36200F] " />

        <div className=" text-[#36200F]  text-center md:text-sm font-normal;
 ">The Inspire Her Afrika Mentorship Program is a transformative and empowering initiative designed to uplift and guide young African women on their journey to personal and professional success. Spanning six months, the program facilitates one-on-one connections between experienced mentors and ambitious mentees, fostering a dynamic learning environment.<br/>The best part is the mentorship pairs—each mentee gets a mentor. It's like having a friend who has been there, done that, and is ready to help you. The program operates on the premise that mentorship is a two-way exchange, where mentors find fulfilment in guiding, and mentees unearth their potential.<br/>
        </div>
    </div>
    </div>

    <div className=" m-auto w-[80%] ">
        <div className=" items-center flex flex-col justify-center leading-9">
            <h1 className=" text-center font-bold md:text-xl text-lg">What to Expect</h1>
            <div className=" w-[80%] md:w-[326px] h-[0px] m-10 border-[3px] border-[#36200F] " />
        </div>
        <div className=" ">
            <div className=" grid md:grid-cols-2 items-center gap-10 mb-20">
                <div>
                <img className=" w-[482px] md:h-[373px] rounded-[10px]" src="view3.png" />
                </div>
                <div className=" ">
                    <div className="">
                        <h5 className="md:text-2xl text-xl font-semibold mb-5 ">Structured Curriculum:<br/></h5>
                    <p className=" md:text-sm text-xs font-normal ">The program employs a carefully curated curriculum, addressing critical areas such as goal-setting, personal branding, career development, and project execution. This ensures a comprehensive and impactful learning experience.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 items-center gap-10 mb-20">
                <div className="">
                <h5 className=" md:text-2xl text-xl  font-semibold mb-5">Active learning:<br/></h5>
                <p className=" md:text-sm text-sm font-normal md:leading-10 ">Mentees are not passive learners but active participants in their growth. Each month, mentors and mentees will receive briefs outlining their focus for the month and providing resources to guide the completion of tasks tailored to enhance mentee’s skills, confidence, and problem-solving abilities.</p>
                </div>
                <div>
                <img className="w-[482px] md:h-[373px] rounded-[10px]" src="view4.png" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 items-center gap-10 mb-20">
                <div className=''>
                <img className="w-[482px] md:h-[373px] rounded-[10px]" src="view.png" />
                </div>
                <div className="">
                    <h5 className="md:text-2xl text-xl  font-semibold mb-2">Reflection and Evaluation:<br/></h5>
                <p className=" md:text-sm text-xs font-normal md:leading-10">The program places a strong emphasis on self-reflection. Through weekly meetings, the accompanied log submissions and surveys, mentees (and the program team) are able to track progress, receive feedback, and refine their strategies.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-10 mb-20">
                <div className="">
                    <h5 className="md:text-2xl text-xl  font-semibold mb-2">Community Engagement:<br/></h5>
                    <p className=" md:text-sm text-xs font-normal md:leading-10">Beyond individual growth, the program encourages mentees to actively participate in community-oriented projects, fostering a sense of social responsibility and leadership.</p>
                    </div>
                    <div>
                <img className="w-[482px] md:h-[373px] rounded-[10px]" src="view1.png" />
                 </div>
            </div>
            <div className=" mb grid md:grid-cols-2 items-center gap-10 pb-4">
                <div>
                <img className="w-[482px] md:h-[373px] rounded-[10px]" src="view2.png" />
                </div>

                <div className="">
                    <h5 className="md:text-2xl text-xl  font-semibold mb-2">Networking Opportunities:<br/></h5>
                    <p className=" md:text-sm text-xs font-normal md:leading-10">The inclusion of informational interviews, mentor consultations and virtual mastery sessions facilitated by subject experts provides mentees with networking opportunities that extend beyond their immediate mentorship circle.</p>
                    </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Mentorship;