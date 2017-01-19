export default class Debug {
  constructor(component) {
    this.component = component;
    this.docsUrl = "http://datatube.com/docs";
  }

  warning(obj) {
    const [code, message] = obj
    console.warn(`[Warning #${code} ${this.docsUrl}/warning/${code}]\n${message}`);
  }

  error(obj) {
    const [code, message] = obj
    throw Error(`[Error #${code} ${this.docsUrl}/error/${code}]\n${message}`);
  }
}
