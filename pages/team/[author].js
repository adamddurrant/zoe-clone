import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Container from "@/components/structure/container";
import Layout from "@/components/structure/layout";
import PostPreview from "@/components/post/post-preview";
import {
  getAuthorsBySlug,
  getPostAndMorePosts,
  getAllAuthors,
} from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostTitle from "@/components/post/post-title";
import Head from "next/head";
import markdownStyles from "components/post/markdown-styles.module.css";

export default function Post({ author, morePosts, bio, preview }) {
  const router = useRouter();
  const filteredContent = morePosts?.filter(
    (post) => post.author.name === author.name
  );
  const postData = filteredContent?.slice(0, 6);
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{author.name} | ZOE</title>
              </Head>
              <div className='wrapper flex justify-center flex-wrap mt-8'>
                <div className='w-48 h-48 relative mr-2 text-center'>
                  <Image
                    src={author.picture.url}
                    layout='fill'
                    className='rounded-full'
                    alt={author.name}
                    priority
                  />
                </div>
                <h1 className='text-5xl py-4 justify-center w-full text-center'>
                  {author.name}
                </h1>
                <div className='bio max-w-xl'>
                  <div
                    className={markdownStyles["markdown"]}
                    dangerouslySetInnerHTML={{ __html: bio }}
                  />
                </div>
              </div>

              <div className='w-full md:w-full relative'>
                <h2 className='mt-12 w-full text-left text-2xl'>
                  Articles by {author.name}
                </h2>
                <hr className='border-accent-2 mt-2 mb-8' />
                <div className='grid grid-cols-3 md:gap-x-16 lg:gap-x-16 gap-y-16 md:gap-y-16 mb-32 max-sm:grid-cols-1'>
                  {postData.map((post) => (
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
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, params }) {
  const authors = await getAuthorsBySlug(params?.author, preview);
  const bios = await markdownToHtml(authors?.fullBio || "");
  const getMorePosts = await getPostAndMorePosts();

  return {
    props: {
      author: authors,
      bio: bios,
      morePosts: getMorePosts?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allAuthors = await getAllAuthors();
  return {
    paths: allAuthors?.map((author) => `/team/${author.slug}`) || [],
    fallback: true,
  };
}
