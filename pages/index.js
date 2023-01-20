import Container from "@/components/container";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import HomeHero from "@/components/home-hero";
import TheTeam from "@/components/the-team";
import LatestPodcasts from "@/components/latest-podcasts";
import EditorsChoice from "@/components/editors-choice";
import FourGrid from "@/components/home-four-grid";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const podcastPosts = allPosts.filter(function (post) {
    return post.category.name == "Podcast";
  });
  const editorPosts = allPosts.filter(function (post) {
    return post.editors == true;
  });
  const FourGridPosts = allPosts.filter(function (post) {
    return post.category.name != "Podcast";
  });
  console.log(FourGridPosts);

  return (
    <>
      <Layout>
        <Head>
          <title>ZOE Blog Clone | A Durrant</title>
        </Head>
        <Intro />
        <Container>
          <HomeHero
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          <TheTeam />
          {LatestPodcasts.length > 0 && <LatestPodcasts posts={podcastPosts} />}
          <FourGrid posts={FourGridPosts} key={FourGridPosts.slug} />
          <EditorsChoice posts={editorPosts} key={editorPosts.slug} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
