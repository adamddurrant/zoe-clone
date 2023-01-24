import React from "react";
import HomeHeader from "./home-header";
import PostPreview from "../post/post-preview";

export default function EditorsChoice({ posts }) {
  return (
    <>
      <HomeHeader text={"Editors Picks"} />
      <section>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-20 max-sm:gap-y-5'>
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </>
  );
}
