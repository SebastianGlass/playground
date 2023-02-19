export class BlogEntryService {
  getById(id) {
    return this.getAll().find(e => e.id === id);
  }

  getAll() {
    return JSON.parse(localStorage.getItem('playground/blog-entries'));
  }
}
