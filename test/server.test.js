import chai from 'chai';
import express from 'express';
import Server from '../server/server';

describe('Server', ()=> {
  describe('#app', () => {
    let server;
    let app;

    var expect = chai.expect;
    beforeEach(() => {
      app = express();
      server = new Server(app);
    });

    it ('returns not an empty app', () => {
      expect(server.app).to.not.empty;
    })

    it ('returns the app as an express function', () => {
      expect(server.app).to.be.a('function');
    })
  });
});
