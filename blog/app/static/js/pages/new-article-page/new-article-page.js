import { BlogEntryService } from '../../services/blog-entry-service.js';
import { Router } from '../../util/router.js';

export class NewArticlePage {
  constructor() {
    this.entryService = new BlogEntryService();
  }

  async load() {
    const fetched = await fetch('./static/js/pages/new-article-page/new-article-page.html');
    this.html = await fetched.text();
  }
  render() {
    document.querySelector('main').innerHTML = this.html;

    document.title = 'new Article - Playground-Blog';
    document.querySelector('[data-id="save"]').addEventListener('click', () => this.save());
    tinymce.init({
      selector: 'textarea',
    });
  }

  save() {
    const formData = new FormData(document.querySelector('form#new-article'));
    formData.set('content', tinymce.get('content').getContent());
    formData.set('description', tinymce.get('description').getContent());
    console.log(formData);
    if (formData.get('title')) {
      const data = {
        title: formData.get('title'),
        content: formData.get('content'),
        description: formData.get('description'),
        created: new Date(),
        createdBy: 'Ano Nymus',
      };
      data.id = encodeURIComponent(data.title.toLocaleLowerCase());
      console.log(data);
      console.log('saved');
      this.entryService.saveEntry(data);
      Router.INSTANCE.gotoPage('');
    } else {
      console.log('invalid');
    }
  }
}
