/** @jsx jsx */
import { Box, jsx } from "theme-ui";
// import markdownStyles from "./mdStyles.module.css";
import mdStyles from "./mdStyles.module.css";

const Postbody = ({ content }) => {
  return (
    <Box sx={{ mx: "auto", maxWidth: ["94%", "98%"], mt: "1rem" }}>
      <div
        className={mdStyles["markdown-body"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default Postbody;
