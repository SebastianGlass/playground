import { BlogEntryPage } from "./pages/blog-entry-page/blog-entry-page.js";
import { ContentLoader } from "./util/content-loader.js";
import { OverviewPage } from "./pages/overview-page/overview-page.js";
const paths = [];
async function gotoPage(page) {
  const target = paths.find((p) => new RegExp(`^${p.path}$`).test(page));
  if (target) {
    target.page.render();
  }
}
async function main() {
  const loader = new ContentLoader();
  await loader.initBlogEntries();
  await loader.initTemplates();
  // Register route watcher
  const homePage = new OverviewPage();
  await homePage.load();
  const blogEntryPage = new BlogEntryPage();
  await blogEntryPage.load();
  paths.push({ path: "/", page: homePage });
  paths.push({ path: "/articles/(.*)", page: blogEntryPage });
  gotoPage(window.location.pathname);
}

main();
