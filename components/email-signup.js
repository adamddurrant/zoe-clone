import React from "react";

export default function EmailSignup() {
  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <section id='email-sub'>
      <div className='flex flex-col md:flex-row w-full p-12 my-10 justify-around items-center bg-[#fac828] rounded max-sm:p-8'>
        <h2 className='w-full md:w-auto md:text-6xl mx-10 leading-[4rem] text-2xl font-Nantes max-sm:leading-[2rem] max-sm:mb-4'>
          Nutrition tips.
          <br /> From world-leading scientists.
        </h2>
        <div className='w-full md:w-auto mx-10'>
          <div id='block-subscribe'>
            <div className='tp-container-inner w-full mb-4'>
              <form onSubmit={handleForm} className='flex'>
                <input
                  type='email'
                  id='email-signup-box'
                  placeholder='Email'
                  className='border-none text-xl rounded-tl-md rounded-bl-md overflow-hidden bg-white w-full h-20 max-sm:h-14 '
                />
                <input
                  type='submit'
                  value='Subscribe'
                  className='inline-block pr-4 rounded-tr-md rounded-br-md bg-white text-[#445dc3] text-lg max-sm:text-md'
                />
              </form>
            </div>
          </div>
          <p className='font-sans leading-normal text-sm font-lota'>
            You'll get one email a week with content you actually want to read,
            curated by the edtorial team.
          </p>
        </div>
      </div>
    </section>
  );
}
