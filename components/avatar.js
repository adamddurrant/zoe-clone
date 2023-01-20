import Image from "next/legacy/image";

export default function Avatar({ name, picture }) {
  return (
    <div className='flex items-center'>
      <div className='w-12 h-12 relative mr-2'>
        <Image
          src={picture.url}
          layout='fill'
          className='rounded-full'
          alt={name}
        />
      </div>
      <div className='text-lg max-sm:text-md text-[#445dc3]'>{name}</div>
    </div>
  );
}
