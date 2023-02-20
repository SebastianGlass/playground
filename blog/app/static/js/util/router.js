import { BlogEntryPage } from '../pages/blog-entry-page/blog-entry-page.js';
import { NewArticlePage } from '../pages/new-article-page/new-article-page.js';
import { OverviewPage } from '../pages/overview-page/overview-page.js';

const routes = [
  { path: '', page: OverviewPage },
  { path: 'articles/(.*)', page: BlogEntryPage },
  { path: 'new-article', page: NewArticlePage },
];
export class Router {
  static INSTANCE;
  constructor() {
    this.baseUrl = window.location.pathname.replace('#', '');
    console.log(this.baseUrl + ' set as baseUrl');
    this.updateLinks('body');
    Router.INSTANCE = this;
  }
  async gotoPage(page) {
    console.info(`[Playground-Blog]:goto request for ${page}`);
    const target = routes.find(p => new RegExp(`^${p.path}$`).test(page.replace('#', '')));
    if (target) {
      if (!target._page) {
        console.info(`[Playground-Blog]: loading page with route ${target.path}`);
        target._page = new target.page();
        await target._page.load();
      } else {
        console.info(`[Playground-Blog]: reuse page with route ${target.path}`);
      }
      window.history.pushState('', '', this.baseUrl + '#' + page);
      target._page.render();
      this.updateLinks('main');
    } else {
      if (page.startsWith('http')) {
        window.location.href = page;
      } else {
        console.error(`[Playground-Blog]: page with route ${page} not found`);
      }
    }
  }

  updateLinks(prefix) {
    document.querySelectorAll(prefix + ' a[href]').forEach(link =>
      link.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        while (!target.href) {
          target = target.parentNode;
        }

        const url = target.href.replace(window.location.protocol + '//' + window.location.host + '/', '');

        this.gotoPage(url);
      })
    );
  }
}
