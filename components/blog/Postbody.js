/** @jsx jsx */
import { Box, jsx } from "theme-ui";

const Postbody = ({ content }) => {
  return (
    <>
      <Box sx={{ mx: "auto", maxWidth: ["94%", "98%"], mt: "1rem" }}>
        <div
          className="markdown-body"
          sx={{ color: "inherit" }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </>
  );
};

export default Postbody;
