'use strict';

///reference path="../typings/chai/chai.d.ts"/> 
import { DogPound } from "../../script/DogPound";
import { QuadrupedAnimal } from "../../script/DogPound";
import { Pet } from "../../script/model/Pet";
import chai = require('chai');
var assert = chai.assert;


declare var module: any;
module.exports = function () {

  var dogPound: DogPound = new DogPound();
  //his could go into World when more scenarios
  var allStreetAnimals: any;

  this.Given(/^there are dogs among animals on the street$/, function (table: any, callback: any) {
    allStreetAnimals = table.hashes();

    var hasDogs: boolean;
    for (var i = 0; i < allStreetAnimals.length; i++) {
      if (allStreetAnimals[i].type === 'DOG') {
        hasDogs = true;
      }
    }

    assert.isTrue(hasDogs, 'dogs are on the street')
    callback();
  });

  this.When(/^only dogs are put into cage$/, function (callback: any) {

    for (var i = 0; i < allStreetAnimals.length; i++) {
      let animalName = allStreetAnimals[i].name;
      let animalType = allStreetAnimals[i].type;
      let animalOnStreet: QuadrupedAnimal = new Pet(animalName, animalType)

      dogPound.getCage().put(animalOnStreet)
    }

    for (var i = 0; i < dogPound.getCage().getAll().length; i++) {
      dogPound.getCage().getAll()[i].getType()
      assert.equal(dogPound.getCage().getAll()[i].getType(), 'DOG')
    };

    callback();
  });

  //example of defined but not implenented scenario part
  this.Then(/^I can check what captured dog name is$/, function (callback: any) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}
