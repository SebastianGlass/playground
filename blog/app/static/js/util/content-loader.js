export class ContentLoader {
  templates = ['blogentry', 'blogentry-preview'];

  async initBlogEntries() {
    const fetched = await fetch('/static/data/demo-entries.json');
    const json = await fetched.json();
    this.createIfNotSet('playground/blog-entries', json);
  }
  async initTemplates() {
    const resolvedTemplates = (
      await Promise.all(
        this.templates.map(async templateName => {
          const fetched = await fetch(`/static/templates/${templateName}.html`);
          const u = await fetched.text();
          return { [templateName]: u };
        })
      )
    ).reduce((a, b) => ({ ...a, ...b }), {});
    this.createIfNotSet('playground/blog-templates', resolvedTemplates);
  }

  createIfNotSet(key, data) {
    if (localStorage.getItem(key)) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
}
