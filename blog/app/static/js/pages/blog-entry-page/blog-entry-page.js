import { BlogEntryService } from '../../services/blog-entry-service.js';
import { TemplateEngine } from '../../util/template-engine.js';

export class BlogEntryPage {
  constructor() {}

  async load() {
    const fetched = await fetch('./static/js/pages/blog-entry-page/blog-entry-page.html');
    this.html = await fetched.text();
  }

  render() {
    document.querySelector('main').innerHTML = this.html;
    const entryId = window.location.pathname.match('/articles/(.*)')[1];

    const blogEntry = new BlogEntryService().getById(entryId);
    const beTemplate = JSON.parse(localStorage.getItem('playground/blog-templates'))['blogentry'];

    const bePlaceholder = document.querySelector('blogentry');

    const t = TemplateEngine.replacePlaceholderWithContent(beTemplate, blogEntry);
    bePlaceholder.insertAdjacentHTML('beforeend', t);
    document.title = `${blogEntry.title} - Playground-Blog`;
  }
}
