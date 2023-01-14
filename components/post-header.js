import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Bread from "./breadcrumb";
import Modal from "./modal";
import { useState } from "react";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  excerpt,
  reviewer,
  bio,
  twitter,
  linkedin,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div id='container' className='flex justify-between pt-12'>
        <div id='left' className='flex flex-col w-[50%] pr-6'>
          <div className='mb-6 text-lg flex justify-between'>
            <Bread />
            <div className='published'>
              <span className='text-sm bold'>Published:</span>{" "}
              <Date dateString={date} className='text-sm' />
            </div>
          </div>
          <PostTitle>{title}</PostTitle>
          <div className='mb-6 text-lg'>{excerpt}</div>
          <div id='bylines' className='flex relative'>
            <div
              className='md:block md:mb-12 cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className='mb-3 text-lg'>Written by:</p>
              <Avatar name={author.name} picture={author.picture} />
            </div>
            <div className='md:block md:mb-12 ml-12'>
              <p className='mb-3 text-lg'>Reviewed by:</p>
              <Avatar name={reviewer.name} picture={reviewer.picture} />
            </div>
          </div>
          <div id='author-modal' className='relative'>
            {isOpen && (
              <Modal
                setIsOpen={setIsOpen}
                name={author.name}
                picture={author.picture}
                bio={author.bio}
                twitter={author.twitter}
                linkedin={author.linkedin}
              />
            )}
          </div>
        </div>
        <div id='right' className='flex flex-col w-[50%] pl-6'>
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
        </div>
      </div>
    </>
  );
}
