
export default class RouterObj {
  constructor(app) {
    this.app = app;
  }

  routings(router) {

    this.app.get('/', (req, res) => {
      res.send('Hello World');
    });

    router.get('/', (req, res) => {
      res.json({message: 'welcome to node.js express es6'});
    });

    this.app.use('/api', router);
  }
}
