import React from "react";
import PostPreview from "./post-preview";

export default function LatestPodcasts({ posts }) {
  return (
    <section>
      <h2 class='mt-3 w-full text-center pb-10 text-3xl my-4'>
        Latest Podcast Episodes
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-6 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32'>
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
  );
}
