import React from "react";

export default function CtaButton({ style }) {
  return (
    <button
      className='text-white py-3 rounded-full block mt-8 text-md px-12 text-base'
      style={style}
    >
      Meet the team
    </button>
  );
}
