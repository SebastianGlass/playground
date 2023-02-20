import { ContentLoader } from './util/content-loader.js';
import { Router } from './util/router.js';

async function main() {
  const loader = new ContentLoader();
  await Promise.all([loader.initBlogEntries(), loader.initTemplates()]);

  new Router().gotoPage(window.location.hash.replace('#', ''));
}

main();
