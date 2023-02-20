export class BlogEntryService {
  getById(id) {
    return this.getAll().find(e => e.id === id);
  }

  getAll() {
    return JSON.parse(localStorage.getItem('playground/blog-entries'));
  }

  saveEntry(entry) {
    const entries = this.getAll();
    entries.push(entry);
    localStorage.setItem('playground/blog-entries', JSON.stringify(entries));
  }
}
