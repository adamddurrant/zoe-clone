import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Bread from "./breadcrumb";
import AuthorByline from "./modals/author-byline";
import ReviewerByline from "./modals/reviewer-byline";
import { useState } from "react";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  excerpt,
  reviewer,
}) {
  const [AuthorIsOpen, setAuthorIsOpen] = useState(false);
  const [ReviewerIsOpen, setReviewerIsOpen] = useState(false);
  const credit = coverImage.responsiveImage.title;

  const handleAuthorOpen = () => {
    setAuthorIsOpen(!AuthorIsOpen);
    setReviewerIsOpen(false);
  };

  const handleReviewerOpen = () => {
    setReviewerIsOpen(!ReviewerIsOpen);
    setAuthorIsOpen(false);
  };

  return (
    <>
      <div
        id='container'
        className='flex justify-between pt-12 max-sm:flex-wrap max-sm:pt-2'
      >
        <div
          id='left'
          className='flex-col w-[50%] pr-6  max-sm:w-[100%] max-sm:p-0'
        >
          <div className='mb-6 text-lg flex justify-between items-center'>
            <Bread />
            <div className='published'>
              <span className='text-sm bold'>Published:</span>{" "}
              <Date dateString={date} className='text-sm' />
            </div>
          </div>
          <PostTitle>{title}</PostTitle>
          <div className='mb-6 text-lg'>{excerpt}</div>
          <div id='bylines' className='flex relative max-sm:flex-wrap mt-12'>
            <div
              className='block md:mb-12 cursor-pointer max-sm:w-full'
              onClick={handleAuthorOpen}
            >
              <p className='mb-3 text-lg'>Written by:</p>
              <div>
                <Avatar name={author.name} picture={author.picture} />
              </div>
            </div>
            <div
              className='md:block md:mb-12 ml-12 max-sm:w-full max-sm:ml-0 max-sm:mt-4 cursor-pointer'
              onClick={handleReviewerOpen}
            >
              <p className='mb-3 text-lg'>Reviewed by:</p>
              <Avatar name={reviewer.name} picture={reviewer.picture} />
            </div>
          </div>
          <div id='author-modal' className='relative'>
            {AuthorIsOpen && (
              <AuthorByline
                name={author.name}
                picture={author.picture}
                bio={author.bio}
                twitter={author.twitter}
                linkedin={author.linkedin}
                personal={author.personal}
              />
            )}
          </div>
          <div id='reviewer-modal' className='relative'>
            {ReviewerIsOpen && (
              <ReviewerByline
                name={reviewer.name}
                picture={reviewer.picture}
                bio={reviewer.bio}
                twitter={reviewer.twitter}
                linkedin={reviewer.linkedin}
                personal={reviewer.personal}
              />
            )}
          </div>
        </div>
        <div
          id='right'
          className='flex flex-col w-[50%] pl-6 max-sm:w-[100%] max-sm:p-0 max-sm:mt-12'
        >
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
          <div className='credit text-xs text-grey-200 text-right mt-2'>
            Credit: {credit}
          </div>
        </div>
      </div>
    </>
  );
}
