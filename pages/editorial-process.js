import React from "react";
import { getEditorialProcessContent } from "@/lib/api";
import Layout from "@/components/structure/layout";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/components/structure/container";
import PostBody from "@/components/post/post-body";

export default function EditorialProcess({ process }) {
  return (
    <Layout>
      <Container>
        <div className='wrapper mt-14'>
          <h1 className='text-5xl text-center'>{process.heading}</h1>
          <PostBody content={process.content} />
        </div>
      </Container>
    </Layout>
  );
}

// fetch process page data
export async function getStaticProps({ preview = false }) {
  const process = (await getEditorialProcessContent(preview)) || [];
  const content = await markdownToHtml(process?.content || "");
  return {
    props: {
      process: {
        content,
        heading: process.heading,
      },
    },
  };
}
