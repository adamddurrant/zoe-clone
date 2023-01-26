const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API - Undo! Undo!");
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getAllCategories() {
  const data = await fetchAPI(
    `
    {
      allCategories {
        name
        slug
      }
    }
  `
  );
  return data?.allCategories;
}

export async function getCategoryBySlug(slug, preview) {
  const data = await fetchAPI(
    `
    query ($slug: String!) {
      allCategories(filter: {slug: {eq: $slug}}) {
        name
        slug
      }
    }
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data?.allCategories[0];
}

export async function getAuthorsBySlug(slug, preview) {
  const data = await fetchAPI(
    `
    query ($slug: String!) {
      allAuthors(filter: {slug: {eq: $slug}}) {
        name
        slug
        bio
        fullBio
        linkedin
        personal
        twitter
        picture {
          url
        }
      }
    }
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data?.allAuthors[0];
}

export async function getAllAuthors() {
  const data = await fetchAPI(
    `
    {
      allAuthors {
        name
        slug
        bio
        fullBio
        linkedin
        personal
        twitter
        picture {
          url
        }
      }
    }

  `
  );
  return data?.allAuthors;
}

export async function getEditorialProcessContent(preview) {
  const data = await fetchAPI(`
    {
      process {
        heading
        content
      }
    }
  `);
  return data?.process;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        editors
        category {
          name
          slug
          id
        }
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
        reviewer {
          name
          bio
          twitter
          linkedin
          personal
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
      }
    }

    ${responsiveImageFragment}
  `,
    { preview }
  );
  return data?.allPosts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      category {
        id
        name
        slug
      }
      excerpt
      content
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        bio
        twitter
        linkedin
        personal
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
      reviewer {
        name
        bio
        twitter
        linkedin
        personal
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, filter: {slug: {neq: $slug}}) {
      title
      slug
      editors
      category {
        id
        name
        slug
      }
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        bio
        twitter
        linkedin
        personal
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
      reviewer {
        name
        bio
        twitter
        linkedin
        personal
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
  }

  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data;
}
