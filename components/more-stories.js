import PostPreview from "./post-preview";

export default function MoreStories({ posts, categoryPosts }) {
  const morePosts = posts.slice(0, 3);
  return (
    <section>
      <h2 className='mb-8 text-3xl font-Lota'>Featured articles</h2>
      <div className='grid grid-cols-3 md:gap-x-16 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32 max-sm:grid-cols-1'>
        {morePosts.map((post) => (
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
