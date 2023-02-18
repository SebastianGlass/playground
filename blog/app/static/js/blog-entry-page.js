export class BlogEntryPage {
  constructor() {}

  async load() {}
  render() {
    const beTemplate = JSON.parse(
      localStorage.getItem("playground/blog-templates")
    )["blogentry"];
    document.querySelector("main").innerHTML = beTemplate;
  }
}
