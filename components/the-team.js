import React from "react";

export default function TheTeam() {
  return (
    <>
      <div className='w-full p-2 my-3' style={{ background: "#f7ad77" }}>
        <a
          href='#'
          className='text-center md:text-left justify-around items-center text-black flex flex-col md:flex-row hover:black-transparent hover:text-black hover:border-black border-transparent border px-4 md:px-8'
        >
          <div className='md:pr-7 md:py-10 md:w-1/2 sm:mx-2 md:mx-6 '>
            <span className='text-xl sm:text-2xl leading-tight md:text-3xl xl:text-3xl font-Lota font-light'>
              Our team of scientists, dieticians, nutritionists, researchers,
              editors and writers ensure our content is accurate, up-to-date,
              and inclusive.
            </span>
            <button className='bg-[#2d3246] text-white py-3 rounded-full block mt-8 text-md px-12'>
              Meet the team
            </button>
          </div>

          <div className='md:w-1/4 py-4 md:py-8 mx-3'>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md'>Tim Newman</h3>
                <p className='block'>Registered Dietitian</p>
              </div>
            </div>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md'>Tim Newman</h3>
                <p className='block'>Registered Dietitian</p>
              </div>
            </div>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md'>Tim Newman</h3>
                <p className='block'>Editor in Chief</p>
              </div>
            </div>
          </div>

          <div className='md:w-1/4 py-4 md:py-8 mx-3'>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md'>Tim Newman</h3>
                <p className='block'>Registered Dietitian</p>
              </div>
            </div>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md'>Tim Newman</h3>
                <p className='block'>Registered Dietitian</p>
              </div>
            </div>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md'>Tim Newman</h3>
                <p className='block'>Editor in Chief</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
