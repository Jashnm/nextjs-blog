# NextJs Blog

Boilerplate with all the components required to make a fully functional SEO optimized blog through NextJs with both SSR(on posts list page) and SSG using Incremental Static Regeneration(on post page).

- Strapi as Content manager
- [Disqus Embedded](https://github.com/disqus/disqus-react) for comments
- Markdown blog
- ThemeUI for components, theme and dark mode
- SEO through next-seo
- Pagination
- Remark and Remark-html for markdown to html
- [Github markdown css](https://github.com/sindresorhus/github-markdown-css) for posts' styling

##### Special thanks to Scott Moss and Frontend Masters for the amazing NextJs workshop.

github-markdown-css lacks dark mode support, so to overcome this, all you've to do is, add a color: "inherit" property to the div element containing markdown content. It's completely sufficient for basic usage.

Screenshots -

<img src="https://user-images.githubusercontent.com/50929873/89986618-6d986680-dc9a-11ea-80a3-d624bc4093a2.png" width="49.5%" /> <img src="https://user-images.githubusercontent.com/50929873/89986630-725d1a80-dc9a-11ea-9bb1-537f1fd1abfd.png" width="49.5%"/>
