import React from 'react'

const Purpose = () => {
  return (

    <>
    <div className='w-full h-fit py-14 bg-[#2A4767] relative'>
         <p className='font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] text-center '>Purpose</p>
         <p className='font-normal md:text-[24px] text-[20px] font-poppins text-white mt-5 text-center xl:w-[70%] mx-auto '>Our nurturing environment encourages every student to think creatively, learn enthusiastically, and grow confidently.</p>
    
        <div className='w-full flex xl:flex-row flex-col gap-y-20 mt-20 md:px-10 px-5'>

            <div className='xl:w-[50%] w-full flex flex-col gap-y-8 items-end'>

                <div className='w-full flex gap-x-5 justify-end '>
                    <p className='font-medium text-[24px] text-white font-poppins text-end '>To develop professional, skilled and responsible educators</p>
                    <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] bg-white shrink-0 rounded-full flex justify-center items-center '>
                       <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
                    </div>
                </div>

                <div className='w-full flex gap-x-5 justify-end'>
                    <p className='font-medium text-[24px] text-white font-poppins text-end '>To build communication skills, classroom management skills and instructional abilities</p>
                   <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] bg-white shrink-0 rounded-full flex justify-center items-center '>
                       <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
                    </div>
                </div>

                <div className='w-full flex gap-x-5 justify-end'>
                    <p className='font-medium text-[24px] text-white font-poppins text-end '>To promote moral values, discipline, and a positive teaching attitude</p>
                    <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] bg-white shrink-0 rounded-full flex justify-center items-center '>
                       <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
                    </div>
                </div>

            </div>

            <div className='w-[40%] h-[500px] xl:flex hidden absolute rounded-[50px] right-10  '>
                 <img src="/assets/img.png" loading='lazy' className='w-full h-full rounded-[50px] object-cover '/>
            </div>

              <div className='w-full h-[500px] flex xl:hidden rounded-[30px]  '>
                 <img src="/assets/img.png" loading='lazy' className='w-full h-full rounded-[30px] object-cover '/>
            </div>


        </div>
    </div>

    <div className='w-full h-[400px] xl:block hidden bg-white '>

    </div>
    </>
  )
}

export default Purpose