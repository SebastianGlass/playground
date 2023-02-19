import { BlogEntryPage } from '../pages/blog-entry-page/blog-entry-page.js';
import { OverviewPage } from '../pages/overview-page/overview-page.js';

const routes = [
  { path: '/', page: OverviewPage },
  { path: '/articles/(.*)', page: BlogEntryPage },
];
export class Router {
  constructor() {
    this.updateLinks('body');
  }
  async gotoPage(page) {
    const target = routes.find(p => new RegExp(`^${p.path}$`).test(page));
    if (target) {
      if (!target._page) {
        console.info(`[Playground-Blog]: loading page with route ${target.path}`);
        target._page = new target.page();
        await target._page.load();
      } else {
        console.info(`[Playground-Blog]: reuse page with route ${target.path}`);
      }
      window.history.pushState('', '', page);
      target._page.render();
      this.updateLinks('main');
    } else {
      if (page.startsWith('http')) {
        window.location.href = page;
      } else {
        console.error(`[Playground-Blog]: page with route ${target.path} not found`);
      }
    }
  }

  updateLinks(prefix) {
    document.querySelectorAll(prefix + ' a[href]').forEach(link =>
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target.href.replace(window.location.protocol + '//' + window.location.host, '');
        console.log(target);
        this.gotoPage(target);
      })
    );
  }
}
