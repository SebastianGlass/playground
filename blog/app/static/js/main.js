import { ContentLoader } from "./content-loader.js";

async function main() {
  const loader = new ContentLoader();
  await loader.initBlogEntries();
  await loader.initTemplates();
  // Register route watcher
  // Show correct page
}

main();
