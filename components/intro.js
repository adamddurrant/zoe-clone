import { CMS_NAME, CMS_URL } from "@/lib/constants";

export default function Intro() {
  return (
    <section className='bg-[#faf8f6] w-full'>
      <div className='mb-2 container flex flex-row mx-auto items-center justify-between '>
        <div className='flex-col items-center basis-auto'>
          <div className='py-2'>
            <span className='text-[1.25rem] font-Nantes'>
              Learn from the team behind the world's largest in-depth nutrition
              study.
            </span>
            <br />
            <span className='text-[1.3rem] font-semibold w-full'>
              Know more, be healthier
            </span>
          </div>
        </div>
        <div className='flex-col'>
          <img
            className='h-[85px] w-auto px-4'
            src='/assets/images/zoe-icons.png'
            alt=''
          />
        </div>

        <div className='flex basis-[40%] justify-end'>
          <div className='flex-col basis-1/3 items-center text-[1rem] pr-2 py-2 border-r-2 border-dashed'>
            <h3 className='font-semibold text-lg font-Nantes'>2 million</h3>
            <p className='leading-6'>Readers helped last year</p>
          </div>
          <div className='flex-col basis-1/3 items-center text-[1rem] px-3 py-2 border-r-2 border-dashed'>
            <h3 className='font-semibold text-lg font-Nantes'>35+</h3>
            <p className='leading-6'>Expert writers & researchers</p>
          </div>
          <div className='flex-col basis-1/3 items-center text-[1rem] px-3 py-2'>
            <h3 className='font-semibold text-lg font-Nantes'>300+</h3>
            <p className='leading-6'>Evidence based articles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
