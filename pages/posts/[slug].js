import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/structure/container";
import PostBody from "@/components/post/post-body";
import MoreStories from "@/components/post/more-stories";
import PostHeader from "@/components/post/post-header";
import SectionSeparator from "@/components/structure/section-separator";
import Layout from "@/components/structure/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/post/post-title";
import Head from "next/head";
import markdownToHtml from "@/lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | ZOE</title>
                <meta property='og:image' content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                reviewer={post.reviewer}
                excerpt={post.excerpt}
                category={post.category}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.post?.content || "");
  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}
