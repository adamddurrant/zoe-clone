import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, author, excerpt, reviewer }) {
  return (
    <>
    <div id="container" className="flex justify-between">
      <div id="left" className="flex flex-col w-[50%] p-3 pr-6">
      <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
          {excerpt}
        </div>
        <div className="flex">
      <div className="md:block md:mb-12">
      <p className="mb-3 text-lg">Written by:</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="md:block md:mb-12 ml-12">
      <p className="mb-3 text-lg">Reviewed by:</p>
        <Avatar name={reviewer.name} picture={reviewer.picture} />
      </div>
    </div>

      </div>
      <div id="right" className="flex flex-col w-[50%] p-3 pl-6">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
    </div>
    </>
  )
}
