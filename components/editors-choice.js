import React from "react";
import HomeHeader from "./home-header";
import PostPreview from "./post-preview";

export default function EditorsChoice({ posts }) {
  return (
    <>
      <HomeHeader text={"Editors Picks"} />
      <section>
        <div className=' w-full md:w-full relative'>
          <div className='two-col columns-3 md:gap-x-16 lg:gap-x-16 mb-32 max-sm:columns-1 max-sm:gap-y-5'>
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
