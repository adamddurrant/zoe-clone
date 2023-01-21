import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import MoreStories from "@/components/more-stories";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import { getAllCategoriesWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import markdownToHtml from "@/lib/markdownToHtml";

export default function Post({ categories, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !categories?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(categories);
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{categories.title} | ZOE</title>
              </Head>
              <h1>{categories.name}</h1>
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

// fetch category page data
export async function getStaticProps({ preview = false }) {
  const categories = (await getAllCategoriesWithSlug(preview)) || [];
  return {
    props: {
      allCategories: {
        name: categories.name,
        slug: categories.slug,
      },
    },
  };
}

export async function getStaticPaths() {
  const allCategories = await getAllCategoriesWithSlug();
  return {
    paths: allCategories?.map((category) => `/${category.slug}`) || [],
    fallback: true,
  };
}
