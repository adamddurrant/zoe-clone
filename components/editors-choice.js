import React from "react";
import HomeHeader from "./home-header";
import PostPreview from "./post-preview";

export default function EditorsChoice({ posts }) {
  return (
    <>
      <HomeHeader text={"Editors Picks"} />
      <section>
        <div className=' w-full md:w-full relative'>
          <div className='two-col columns-4 md:gap-x-16 lg:gap-x-16 mb-32'>
            {posts?.map((post) => (
              <div className='mb-12'>
                <PostPreview
                  key={post.slug}
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
