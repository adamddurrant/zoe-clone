import Container from "@/components/structure/container";
import Intro from "@/components/home/intro";
import Layout from "@/components/structure/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import HomeHero from "@/components/home/home-hero";
import TheTeam from "@/components/home/the-team";
import LatestPodcasts from "@/components/home/latest-podcasts";
import EditorsChoice from "@/components/home/editors-choice";
import FourGrid from "@/components/home/home-four-grid";
import EmailSignup from "@/components/home/email-signup";

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
          <EmailSignup />
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
