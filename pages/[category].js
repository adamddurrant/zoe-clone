import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '@/components/container';
import PostBody from '@/components/post-body';
import MoreStories from '@/components/more-stories';
import PostHeader from '@/components/post-header';
import SectionSeparator from '@/components/section-separator';
import Layout from '@/components/layout';
import { getAllCategories, getCategoryBySlug, getPostAndMorePosts } from '@/lib/api';
import PostTitle from '@/components/post-title';
import Head from 'next/head';
import markdownToHtml from '@/lib/markdownToHtml';

export default function Post({ category, morePosts, preview }) {
	const router = useRouter();

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
							<h1>{category.name}</h1>
							{morePosts.length > 0 && <MoreStories posts={morePosts} />}
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
}

// fetch category page data
export async function getStaticProps({ preview = false, params }) {
	const categories = await getCategoryBySlug(params?.category, preview);
	return {
		props: {
			category: categories,
			morePosts: [],
		},
	};
}

export async function getStaticPaths() {
	const allCategories = await getAllCategories();
	return {
		paths: allCategories?.map((category) => `/${category.slug}`) || [],
		fallback: true,
	};
}
