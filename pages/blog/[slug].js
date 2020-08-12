/** @jsx jsx */
import { jsx, Image, Box } from "theme-ui";
import Postbody from "../../components/blog/Postbody";
import { BsArrowLeft } from "react-icons/bs";
import markdownToHtml from "../../lib/MarkdowntoHtml";
import PostDate from "../../components/blog/PostDate";
import BackButton from "../../components/blog/BackButton";
import TopHeading from "../../components/blog/TopHeading";
import CommentDisqus from "../../components/blog/CommentDisqus";
import { NextSeo } from "next-seo";
import getDataFromAPI from "../../lib/api";
import BlogPage from "../../components/blog/BlogPage";
import { useState, useEffect } from "react";
import GoUpward from "../../components/blog/GoUpward";
// import SocialShare from "../../components/blog/SocialShare";

export default ({ post }) => {
  const SEO = {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 100) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 100) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
  }, [showScroll]);

  return (
    <>
      <NextSeo {...SEO} />
      {/* <BlogPage> */}
      <Box
        variant="containers.page"
        sx={{ maxWidth: "960px", bg: "muted", px: ["0.2rem", "2rem"] }}
      >
        <BackButton url="/blog">
          <BsArrowLeft size="2rem" />
        </BackButton>

        <Box>
          <TopHeading title={post.title} />
          <Box sx={{ textAlign: "center" }}>
            <Image src={post.featuredImage[0].url} variant="images.featured" />
          </Box>
          <PostDate postDate={post.updatedAt} update={true} />

          <Postbody content={post.content} />

          {/* <SocialShare pageeUrl={post.slug} /> */}
        </Box>

        <CommentDisqus post={post} />
      </Box>
      {/* </BlogPage> */}
      <GoUpward showScroll={showScroll} />
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getDataFromAPI(`posts?status_in=Publish`);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await getDataFromAPI(`posts?slug=${params.slug}`);
  const content = await markdownToHtml(data[0].content || " ");

  return {
    props: {
      post: {
        ...data[0],
        content,
      },
    },
    revalidate: 1,
  };
}
