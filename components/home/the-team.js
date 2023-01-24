import React from "react";
import CtaButton from "../structure/cta-button";
import HomeHeader from "./home-header";

export default function TheTeam() {
  return (
    <>
      <HomeHeader text={"The Review Board"} />

      <div
        className='w-full p-2 my-3 max-sm:pt-5'
        style={{ background: "#fbf8f3" }}
      >
        <div className='md:text-left justify-around items-center text-black flex flex-col md:flex-row hover:black-transparent border-transparent border px-4 md:px-8'>
          <div className='md:pr-7 md:py-10 md:w-1/2 sm:mx-2 md:mx-6 '>
            <span className='sm:text-2xl leading-tight md:text-2xl xl:text-2xl font-Lota font-light max-sm:text-left'>
              Our team of scientists, dieticians, nutritionists, researchers,
              editors and writers ensure our content is accurate, up-to-date,
              and inclusive.
            </span>
            <CtaButton style={{ backgroundColor: "#2d3246" }} />
          </div>

          <div className='md:w-1/4 py-4 mx-3 max-sm:w-full max-sm:pt-12'>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md mb-0'>Tim Newman</h3>
                <p className='block font-Nantes text-[17px]'>
                  Registered Dietitian
                </p>
              </div>
            </div>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md mb-0'>Tim Newman</h3>
                <p className='block font-Nantes text-[17px]'>
                  Registered Dietitian
                </p>
              </div>
            </div>
            <div className='flex pb-0'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md mb-0'>Tim Newman</h3>
                <p className='block font-Nantes text-[17px]'>
                  Registered Dietitian
                </p>
              </div>
            </div>
          </div>

          <div className='md:w-1/4 py-4 md:py-8 mx-3 max-sm:w-full'>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md mb-0'>Tim Newman</h3>
                <p className='block font-Nantes text-[17px]'>
                  Registered Dietitian
                </p>
              </div>
            </div>
            <div className='team-person flex'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md mb-0'>Tim Newman</h3>
                <p className='block font-Nantes text-[17px]'>
                  Registered Dietitian
                </p>
              </div>
            </div>
            <div className='flex pb-0'>
              <img
                src='/assets/images/tim-newman.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />
              <div className='name pl-1'>
                <h3 className='block font-medium text-md mb-0'>Tim Newman</h3>
                <p className='block font-Nantes text-[17px]'>
                  Registered Dietitian
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
