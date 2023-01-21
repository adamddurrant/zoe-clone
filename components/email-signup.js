import React from "react";

export default function EmailSignup() {
  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <section id='email-sub'>
      <div className='flex flex-col md:flex-row w-full p-10 pb-16 my-10 justify-around items-center bg-[#fac828] rounded'>
        <h2 className='w-full md:w-auto md:text-6xl mx-10 leading-[4rem] text-2xl font-Nantes'>
          Nutrition tips from world-leading scientists.
        </h2>
        <div className='w-full md:w-auto mx-10'>
          <p className='max-w-sm font-sans text-lg leading-normal mb-4'>
            You'll get one email a week with content you actually want to read,
            curated by the edtorial team.
          </p>
          <div id='block-subscribe'>
            <div
              className='tp-container-inner'
              style={{ height: 91, width: 480 }}
            >
              <form onSubmit={handleForm} className='flex'>
                <input
                  type='email'
                  id='email-signup-box'
                  placeholder='Email'
                  className='border-none text-xl rounded-tl-md	rounded-bl-md'
                  style={{
                    overflow: "hidden",
                    backgroundColor: "white",
                    width: 480,
                    height: 80,
                  }}
                />
                <input
                  type='submit'
                  value='Subscribe'
                  className='inline-block pr-4 rounded-tr-md	rounded-br-md bg-white text-[#445dc3] text-lg'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
