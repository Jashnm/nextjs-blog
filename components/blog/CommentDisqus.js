/** @jsx jsx */
import { Box, jsx, Divider } from "theme-ui";
// import { DiscussionEmbed } from "disqus-react";
import { DiscussionEmbed } from "disqus-react";

const CommentDisqus = ({ post }) => {
  return (
    <Box sx={{ width: ["94%", "96%"], my: "2rem", mx: "auto" }}>
      <DiscussionEmbed
        shortname={process.env.DISQUS_NAME}
        config={{
          url: `${process.env.PAGEURL}/blog/${post.slug}`,
          identifier: post.id,
          title: post.title,
        }}
      />
    </Box>
  );
};

export default CommentDisqus;
