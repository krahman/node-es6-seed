export default class ConfigObj {
  constructor(app){
    this.app = app;
  }

  setPort(port) {
    this.app.set('port', port);
  }
}
