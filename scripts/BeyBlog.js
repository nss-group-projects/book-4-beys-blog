import { articleList } from "./articles.js";

export const BeyBlog = () => {
    const articles = articleList()
  return `
        <article class="authors column">
            <h2>Authors</h2>
        </article>
        <article class="articles column">
            <h2>Articles</h2>
            ${articles}
        </article>
        <article class="categories column">
            <h2>Categories</h2>
        </article>
    `;
};
