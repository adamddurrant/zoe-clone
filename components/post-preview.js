import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import HomeAvatar from "./home-avatar";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className='mb-5 h-[300px] max-sm:h-[150px]'>
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <Link href={`/posts/${slug}`}>
        <h3 className='text-2xl mb-1 leading-snug'>
          <div className='text-lg mb-2'>
            <Date dateString={date} />
          </div>
          <div className='font-Nantes font-medium max-sm:text-[20px] max-sm:mb-2'>
            {title}
          </div>
        </h3>
        <p className='text-lg leading-relaxed mb-4 font-Lota max-sm:text-sm'>
          {excerpt.substring(0, 85) + "..."}
        </p>
        <HomeAvatar name={author.name} picture={author.picture} />
      </Link>
    </div>
  );
}
