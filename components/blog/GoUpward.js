/** @jsx jsx */
import { jsx } from "theme-ui";
import { BsArrowUp } from "react-icons/bs";
import arrowUp from "./scrollButton.module.css";

const GoUpward = ({ showScroll }) => {
  return (
    <BsArrowUp
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      sx={{
        height: 25,
        bg: "gray",
        color: "#fff",
        display: showScroll ? "flex" : "none",
        right: ["1rem", "2rem"],
      }}
      className={arrowUp.scrollTop}
    />
  );
};

export default GoUpward;
