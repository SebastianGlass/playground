import { TemplateEngine } from "../../util/template-engine.js";

export class OverviewPage {
  constructor() {}

  async load() {
    const fetched = await fetch(
      "/static/js/pages/overview-page/overview-page.html"
    );
    this.html = await fetched.text();
  }
  render() {
    document.querySelector("main").innerHTML = this.html;
    const beTemplate = JSON.parse(
      localStorage.getItem("playground/blog-templates")
    )["blogentry-preview"];
    const bePlaceholder = document.querySelector("blogentry-preview");
    const blogEntries = this.blogEntries;
    const max = Math.min(
      blogEntries.length,
      bePlaceholder.attributes.max.value
    );
    for (let i = 0; i < max; i++) {
      const blogEntry = blogEntries[i];
      const t = TemplateEngine.replacePlaceholderWithContent(
        beTemplate,
        blogEntry
      );
      bePlaceholder.insertAdjacentHTML("beforeend", t);
    }
    document.title = "Playground-Blog";
  }

  get blogEntries() {
    return JSON.parse(localStorage.getItem("playground/blog-entries"));
  }
}
