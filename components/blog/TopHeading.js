/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

const TopHeading = ({ title }) => {
  return (
    <Heading
      variant="text.heading.topHeading"
      sx={{
        textAlign: ["center", "left"],
        px: "0.5rem",
        mb: "2rem",
        alignSelf: "center",
      }}
    >
      {title}
    </Heading>
  );
};

export default TopHeading;
