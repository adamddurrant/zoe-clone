import Image from "next/image";
import { useState } from "react";

export default function Avatar({ name, picture }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='flex items-center'
      onMouseOver={() => setIsOpen(!isOpen)}
      onMouseOut={() => setIsOpen(!isOpen)}
    >
      <div className='w-12 h-12 relative mr-4'>
        <Image
          src={picture.url}
          layout='fill'
          className='rounded-full'
          alt={name}
        />
      </div>
      <div className='text-lg font-bold underline'>{name}</div>
    </div>
  );
}
