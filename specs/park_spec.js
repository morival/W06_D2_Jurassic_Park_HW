const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100);

    dinosaur1 = new Dinosaur('T-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Liopleurodon', 'carnivore', 9001);
    dinosaur3 = new Dinosaur('Micropachycephalosaurus', 'herbivore', 49);

  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    const actual = mostAttractiveDinosaur(park.collectionOfDinosaurs);
    assert.deepStrictEqual(actual, [dinosaur2]);

  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    
    const actual = findSpecies('Liopleurodon');
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
