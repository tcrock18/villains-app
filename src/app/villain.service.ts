import { Injectable } from '@angular/core';

@Injectable()
export class VillainService {

  // constructor() { }

  getVillains() {

    return [
      {id: 1, name: 'Magneto'},
      {id: 2, name: 'Lawyers'},
      {id: 3, name: `Ex's`}
    ];
      // const villains = [
    // {id: 1, name: 'Magneto'},
    // {id: 2, name: 'Lawyers'},
    // {id: 3, name: `Ex's`}

  }

}
