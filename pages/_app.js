import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "theme-ui";
import SEO from "../next-seo.config";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
