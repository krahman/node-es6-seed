import bodyParser from 'body-parser';

export default class ServerObj {
  constructor(app) {
    this.app = app;
  }

  parsers() {
    this.app.use(bodyParser.urlencoded({extended: true}))
    this.app.use(bodyParser.json());
  }
}
