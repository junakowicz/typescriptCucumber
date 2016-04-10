'use strict';

import { DogCage } from "./model/DogCage";

export interface QuadrupedAnimal {
    getType():string
    isDog(): boolean;
    greet(): string;
}


export interface Cage {

    put(quadruped: QuadrupedAnimal):void ;

    getAll():Array<QuadrupedAnimal>;

}
export interface Pound {

    getCage: Cage;
}

export class DogPound {

private cage: Cage = new DogCage();
    getCage():Cage {
        return this.cage;
    }
}