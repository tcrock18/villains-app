import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.css']
})
export class VillainFormComponent {

  @Input() villain;

  @Output() valid = new EventEmitter<any>();

  kindOptions = ['Mutant', 'Human', 'Other'];
  genderOptions = ['Male', 'Female', 'Tranny'];
  universeOptions = ['Marvel', 'DC', 'Other'];
  ratingOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


  constructor() {
    if (!this.villain) {
      this.villain = {};
    }
  }

  formSubmitted(villain) {
    this.valid.emit(villain);
  }
}


// {
//   "bio": "",
//   "gender": "male",
//   "identity": {
//     "name": {
//       "first": "Eric",
//       "middle": "",
//       "last": "Lehnsherr"
//     },
//     "age": ""
//   },
//   "isActive": true,
//   "kind": "Mutant",
//   "name": "Magneto",
//   "nicknames": [],
//   "rating": "",
//   "universe": "Marvel"
// }
