'use strict';

const DOG_TYPE:string = 'DOG'

import { QuadrupedAnimal } from "../DogPound";


export class Pet implements QuadrupedAnimal {



constructor( private name: string, private type: string){}

    getType():string{
        return this.type;
    };

    isDog(): boolean {
       return this.getType() === DOG_TYPE;
    }

    greet(): string{
        let greet = this.name;
        if (this.isDog) {
            greet + ' WOOF';
        } else {
            greet + 'hisss burp';
        }

        return greet;
    };
}
