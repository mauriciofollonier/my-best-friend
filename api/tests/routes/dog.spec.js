/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');
const { Temperament } = require('../../src/db');

const agent = session(app);
const dog = {
  name: 'Pug',

};

describe("Dogs routes", () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});

describe('/dogs?name=', () => {
  it('GET responde con status 200 si encuentra un perro', function() {
      agent.get('/dogs?name=Boxer') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  });
})

describe('/dogs/:id', () => {
  it('GET responde con status 200 si encuentra un perro por id',  function() {
    agent.get('/dogs/1') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  })
})
describe('/temperaments', () => {
  it('respond with status 200 if find the temperaments', function() {
    agent.get('/temperaments') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  })
});

