export default class Log {
  constructor(component) {
    this.component = component;
    this.docsUrl = "http://datatube.com/docs/code/";
  }

  error(message, code = "000") {
    console.log(
      `Dataatube error #${code} ${this.docsUrl}${code}\n${message}`
    );
  }
}
