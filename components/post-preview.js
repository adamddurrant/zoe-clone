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
  console.log(excerpt);
  return (
    <div>
      <div className='mb-5'>
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <div className='text-lg mb-2'>
          <Date dateString={date} />
        </div>
        <Link href={`/posts/${slug}`} className='hover:underline font-Nantes'>
          {title}
        </Link>
      </h3>
      <p className='text-lg leading-relaxed mb-4'>
        {excerpt.substring(0, 65) + "..."}
      </p>
      <HomeAvatar name={author.name} picture={author.picture} />
    </div>
  );
}
