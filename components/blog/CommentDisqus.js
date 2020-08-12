/** @jsx jsx */
import { Box, jsx, Divider } from "theme-ui";
// import { DiscussionEmbed } from "disqus-react";
import { DiscussionEmbed } from "disqus-react";

const CommentDisqus = ({ post }) => {
  return (
    <Box sx={{ width: ["94%", "96%"], my: "2rem", mx: "auto" }}>
      <DiscussionEmbed
        shortname="yourdisqusshortname"
        config={{
          url: `https://yourpageURL.domain/blog/${post.slug}`,
          identifier: post.id,
          title: post.title,
        }}
      />
    </Box>
  );
};

export default CommentDisqus;
