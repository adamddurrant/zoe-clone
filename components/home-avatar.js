import Image from "next/legacy/image";

export default function HomeAvatar({ name, picture }) {
  return (
    <div className='flex items-center'>
      <div className='w-11 h-11 relative mr-2 max-sm:mr-2'>
        <Image
          src={picture.url}
          layout='fill'
          className='rounded-full object-cover'
          alt={name}
        />
      </div>
      <div className='text-lg max-sm:text-sm'>{name}</div>
    </div>
  );
}
