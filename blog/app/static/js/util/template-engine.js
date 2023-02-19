export class TemplateEngine {
  static replacePlaceholderWithContent(template, obj) {
    let result = template;
    Object.entries(obj).forEach(([k, v]) => (result = result.replace(`{{${k}}}`, v)));
    return result;
  }
}
