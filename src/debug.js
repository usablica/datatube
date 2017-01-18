export default class Debug {
  constructor(component) {
    this.component = component;
    this.docsUrl = "http://datatube.com/docs/code/";
  }

  error(obj) {
    const [code, message] = obj
    throw Error(`[#${code} ${this.docsUrl}${code}]\n${message}`);
  }
}
