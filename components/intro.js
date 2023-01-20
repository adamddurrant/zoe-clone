import { CMS_NAME, CMS_URL } from "@/lib/constants";

export default function Intro() {
  return (
    <section className='bg-[#faf8f6] w-full'>
      <div className='mb-2 container flex flex-row mx-auto items-center justify-between max-sm:flex-wrap'>
        <div className='flex-col items-center basis-auto max-sm:basis-[70%] max-sm:w-full'>
          <div className='py-2'>
            <div className='text-[1.25rem] font-Nantes max-sm:text-[1rem] leading-7'>
              Learn from the team behind the world's largest nutrition study.
            </div>
            <span className='text-[1.3rem] font-medium w-full max-sm:text-[19px]'>
              Know more, be healthier
            </span>
          </div>
        </div>
        <div className='flex-col max-sm:basis-[30%]'>
          <img
            className='h-[85px] w-auto px-4 max-sm:px-0 object-cover'
            src='/assets/images/zoe-icons.png'
            alt=''
          />
        </div>

        <div className='flex basis-[40%] justify-end max-sm:basis-[100%] '>
          <div className='flex-col basis-1/3 items-center text-[1rem] pr-2 py-2 border-r-2 border-dashed'>
            <h3 className='font-semibold text-lg font-Nantes'>2 million</h3>
            <p className='leading-6 max-sm:text-sm'>Readers helped last year</p>
          </div>
          <div className='flex-col basis-1/3 items-center text-[1rem] px-3 py-2 border-r-2 border-dashed'>
            <h3 className='font-semibold text-lg font-Nantes'>35+</h3>
            <p className='leading-6 max-sm:text-sm'>
              Expert writers & researchers
            </p>
          </div>
          <div className='flex-col basis-1/3 items-center text-[1rem] px-3 py-2'>
            <h3 className='font-semibold text-lg font-Nantes'>300+</h3>
            <p className='leading-6 max-sm:text-sm'>Evidence based articles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
