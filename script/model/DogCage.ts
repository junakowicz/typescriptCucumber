'use strict';

import { QuadrupedAnimal } from "../DogPound";
import { Cage } from "../DogPound";

export class DogCage implements Cage {

private capturedAnimals: Array<QuadrupedAnimal> = [];


    put(quadruped: QuadrupedAnimal):void {
      if(quadruped.isDog()){

       this.capturedAnimals.push(quadruped);   
      }

    };

    getAll():Array<QuadrupedAnimal>{

      return this.capturedAnimals;
    };

}