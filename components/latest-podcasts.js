import React from "react";
import PostPreview from "./post-preview";
import HomeHeader from "./home-header";

export default function LatestPodcasts({ posts }) {
  return (
    <section>
      <HomeHeader text={"Latest Podcasts"} />
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32'>
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
