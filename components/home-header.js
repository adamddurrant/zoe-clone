import React from "react";

export default function HomeHeader({ text }) {
  return (
    <>
      <h2 class='mt-12 w-full text-left text-2xl'>{text}</h2>
      <hr className='border-accent-2 mt-2 mb-8' />
    </>
  );
}
