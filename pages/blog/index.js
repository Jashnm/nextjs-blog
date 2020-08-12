/** @jsx jsx */
import { jsx, Flex, Heading, Box, ThemeProvider } from "theme-ui";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import BackButton from "../../components/blog/BackButton";
import TopHeading from "../../components/blog/TopHeading";
import PaginationButtons from "../../components/blog/PaginationButtons";
import { NextSeo } from "next-seo";
import getDataFromAPI from "../../lib/api";
import BlogPage from "../../components/blog/BlogPage";

const HomePage = ({ posts, page, numOfPosts }) => {
  //Not needed is same as SEO defines globally
  const SEO = {
    title: "Blog Title",
    description: "Some description about blog, if different from site",

    openGraph: {
      title: "Blog Title",
      description: "Some description about blog, if different from site",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      {/* <BlogPage> */}
      <Box variant="containers.page">
        <BackButton url="/">Home</BackButton>
        <TopHeading title="Blog's Title" />

        <Flex
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            minHeight: "80vh",
            mt: "2rem",
          }}
        >
          {posts.map((post) => (
            <div
              sx={{
                width: ["98%", "45%"],
                py: 3,
                display: "flex",
                flexDirection: "column",
                m: ["auto", "0"],
              }}
            >
              <Box variant="containers.card">
                <Link
                  key={post.slug}
                  href="/blog/[id]"
                  as={`/blog/${post.slug}`}
                >
                  <a
                    sx={{
                      variant: "styles.a",
                    }}
                  >
                    <img
                      src={post.featuredImage[0].url}
                      alt=""
                      sx={{ width: "100%" }}
                    />
                    <Heading
                      mt="0.8rem"
                      sx={{
                        fontSize: "calc(1.8rem + 0.6vw)",
                        fontWeight: "500",
                      }}
                    >
                      {post.title}
                    </Heading>
                  </a>
                </Link>
                <p sx={{ fontSize: "1.2rem" }}>{post.excerpt}</p>
              </Box>
            </div>
          ))}
        </Flex>
        <PaginationButtons
          left={<BsArrowLeft />}
          right={<BsArrowRight />}
          page={page}
          postNumber={numOfPosts}
        />
      </Box>
      {/* </BlogPage> */}
    </>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 8;

  const numOfPosts = await getDataFromAPI(`posts/count?status_in=Publish`);

  //Posts sorted as last updated at, and only those with enum "Publish" will come
  const data = await getDataFromAPI(
    `posts?_sort=updatedAt:desc&status=Publish&_limit=8&_start=${start}`
  );
  return {
    props: { posts: data, page: +page, numOfPosts },
  };
}

export default HomePage;
