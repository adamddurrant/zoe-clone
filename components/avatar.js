import Image from "next/legacy/image";

export default function Avatar({ name, picture }) {
  return (
    <div className='flex items-center'>
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
