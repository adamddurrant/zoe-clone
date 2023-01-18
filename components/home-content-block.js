import React from "react";

export default function ContentBlock() {
  return (
    <section>
      <div className=' w-full md:w-full  relative md:pl-8'>
        <div className='two-col columns-2 gap-[80px]'>
          <div className='avoid-break flex flex-col'>
            <a href='#' className='relative block mb-2'>
              <img
                src='/assets/images/zoe-icons.png'
                width={300}
                height={300}
                data-sizes='100vw'
                className='inline-block blur-up h-auto w-full lazyloaded'
              />
            </a>
            <div className='card '>
              <h5>
                {" "}
                <a href='#'>Marketing</a>
              </h5>
              <h2 className=''>
                <a href='#'>
                  Take 5: The Surprising Ways Emotions Shape Consumer Behavior
                </a>
              </h2>
              <p>
                Companies, take note—emotions like anger, fear, and anticipation
                can impact what ends up in consumers’ shopping carts.
              </p>
            </div>
          </div>
          <div className='avoid-break flex flex-col'>
            <a href='#' className='relative block mb-2'>
              <img
                src='/assets/images/zoe-icons.png'
                width={300}
                height={300}
                data-sizes='100vw'
                className='inline-block blur-up h-auto w-full lazyloaded'
              />
            </a>
            <div className='card '>
              <h5>
                {" "}
                <a href='#'>Strategy</a>
              </h5>
              <h2 className=''>
                <a href='#'>
                  Transparency Requirements May Not Curb Sneaky Behavior
                </a>
              </h2>
              <p>
                A new study finds that it is possible to maintain plausible
                deniability, even if your conversations are later made public.
              </p>
            </div>
          </div>
          <div className='avoid-break flex flex-col'>
            <a href='#' className='relative block mb-2'>
              <img
                src='/assets/images/zoe-icons.png'
                width={300}
                height={300}
                data-sizes='100vw'
                className='inline-block blur-up h-auto w-full lazyloaded'
              />
            </a>
            <div className='card '>
              <h5>
                {" "}
                <a href='#'>Operations</a>
              </h5>
              <h2 className=''>
                <a href='#'>
                  Product Q&amp;A Forums Hold a Lot of Promise. Here’s How to
                  Make Them Work.
                </a>
              </h2>
              <p>
                The key to these online communities, where users can ask and
                answer questions, is how many questions get useful answers.
              </p>
            </div>
          </div>
          <div className='avoid-break flex flex-col'>
            <a href='#' className='relative block mb-2'>
              <img
                src='/assets/images/zoe-icons.png'
                width={300}
                height={300}
                data-sizes='100vw'
                className='inline-block blur-up h-auto w-full lazyloaded'
              />
            </a>
            <div className='card '>
              <h5>
                {" "}
                <a href='#'>Finance &amp; Accounting</a>
              </h5>
              <h2 className=''>
                <a href='#'>
                  Investors Are Eager for Accurate ESG Information. Can
                  Financial Analysts Provide It?
                </a>
              </h2>
              <p>
                Analysts aren’t traditionally steeped in ESG, but they do have
                deep knowledge of the companies they cover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
