/** @jsx jsx */
import { Text, jsx } from "theme-ui";

const PostDate = ({ postDate, update }) => {
  const date = new Date(postDate);
  const month = date.toLocaleString("default", {
    month: "long",
  });

  return (
    <Text
      sx={{
        fontSize: "1rem",
        width: "98%",
        mx: "auto",
        px: "1rem",
        mb: ["0.5rem", "1rem"],
      }}
    >
      {month + " " + date.getDate() + ", " + date.getFullYear()}
    </Text>
  );
};

export default PostDate;
