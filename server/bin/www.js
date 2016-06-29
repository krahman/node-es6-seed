import express from 'express';
import ServerObj from '../server';
import RouterObj from '../router/router';
import ConfigObj from '../config/config';

class WwwObject {

  constructor() {
    this.app = express();
    this.server = new ServerObj(this.app);
    this.router = new RouterObj(this.app);
    this.config = new ConfigObj(this.app);
    this.run();
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
