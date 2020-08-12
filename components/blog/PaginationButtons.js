/** @jsx jsx */
import { Flex, Button, jsx } from "theme-ui";
import { useRouter } from "next/router";

const PaginationButtons = ({ page, postNumber, left, right }) => {
  const router = useRouter();
  return (
    <Flex
      sx={{
        width: ["92%", "100%"],
        mx: "auto",
        my: "2rem",
        justifyContent: "space-between",
      }}
    >
      <Button
        onClick={() => router.push(`/blog?page=${page - 1}`)}
        disabled={page <= 1}
      >
        {left}
      </Button>
      <Button
        onClick={() => router.push(`/blog?page=${page + 1}`)}
        disabled={page >= Math.ceil(postNumber / 8)}
      >
        {right}
      </Button>
    </Flex>
  );
};

export default PaginationButtons;
