import { useRouter } from "next/router";
import Container from "@/components/structure/container";
import Layout from "@/components/structure/layout";
import PostPreview from "@/components/post/post-preview";
import {
  getAllCategories,
  getCategoryBySlug,
  getPostAndMorePosts,
} from "@/lib/api";
import PostTitle from "@/components/post/post-title";
import Head from "next/head";

export default function Post({ category, morePosts, preview, allCategories }) {
  const router = useRouter();
  const filteredContent = morePosts.filter(
    (post) => post.category.slug === category.slug
  );

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{category.name} | ZOE</title>
              </Head>
              <h1 className='text-5xl py-14'>{category.name}</h1>
              {allCategories.map((category) => (
                <a
                  className='mr-6 mb-6'
                  key={category.name}
                  href={category.slug}
                >
                  {category.name}
                </a>
              ))}

              <hr className='py-4 mt-6' />
              <div className=' w-full md:w-full relative'>
                <div className='grid grid-cols-3 md:gap-x-16 lg:gap-x-16 gap-y-16 md:gap-y-16 mb-32 max-sm:grid-cols-1'>
                  {filteredContent.map((post) => (
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
  const categories = await getCategoryBySlug(params?.category, preview);
  const allCategories = await getAllCategories();
  const getMorePosts = await getPostAndMorePosts();

  return {
    props: {
      category: categories,
      allCategories: allCategories,
      morePosts: getMorePosts?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories();
  return {
    paths: allCategories?.map((category) => `/category/${category.slug}`) || [],
    fallback: true,
  };
}
