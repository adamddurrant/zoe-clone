import React from "react";
import PostPreview from "./post-preview";

export default function FourGrid({ posts }) {
  return (
    <>
      <section>
        <div className=' w-full md:w-full relative'>
          <div className='two-col columns-2 md:gap-x-16 lg:gap-x-16 mb-32'>
            {posts?.map((post) => (
              <div className='mb-12' key={post.slug}>
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
