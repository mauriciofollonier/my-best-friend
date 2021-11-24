const { Dog, Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
  });
  describe('Temperament model', function () {
    beforeEach(async function() {
      await Temperament.sync({ force: true });
    });
    it("shouldn't create it if you don't get a name", (done) => {
      Temperament.create({id: "122333434"})
        .then(() => done(new Error('name is required')))
        .catch(() => done());
    });
    it('name must be an STRING', function(){
      expect(typeof Temperament.name).equal("string")
    })
    });
  
});
