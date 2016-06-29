import express from 'express';
import ServerObj from '../server';
import RouterObj from '../router/router';
import ConfigObj from '../config/config';

class WwwObject {

  constructor() {
    app = express();
    server = new ServerObj(this.app);
    router = new RouterObj(this.app);
    config = new ConfigObj(this.app);
    run();
  }

  run() {
    this.server.parsers();
    this.router.routings(express.Router());
    this.config.setPort(process.env.PORT || 3000);
    this.app.listen(this.app.get('port'), ()=> {
      let port = this.app.get('port');
      console.log(`Express server listening on port ${port}`);
    });
  }
}

new WwwObject();
