import React from "react";
import PostPreview from "../post/post-preview";

export default function FourGrid({ posts }) {
  const TwoColPosts = posts.slice(0, 4);
  const FourColPosts = posts.slice(0, 8);

  return (
    <>
      <hr className='mb-20'></hr>
      <section>
        <div id='home-four-grid' className='w-full relative'>
          <div className='two-col columns-2 md:gap-x-16 lg:gap-x-16 max-sm:flex max-sm:flex-wrap max-sm:gap-5'>
            {TwoColPosts?.map((post) => (
              <div
                className='mb-12 avoid-break flex flex-col box-border max-sm:flex-1'
                key={post.slug}
              >
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full md:w-full relative'>
          <div className='two-col columns-4 md:gap-x-8 lg:gap-x-16 mb-12 max-sm:flex max-sm:flex-wrap max-sm:gap-5'>
            {FourColPosts?.map((post) => (
              <div
                className='mb-12 avoid-break flex flex-col box-border max-sm:flex-1'
                key={post.slug}
              >
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
