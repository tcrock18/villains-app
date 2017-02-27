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


  constructor() {
    if (!this.villain) {
      this.villain = {};
    }
  }

  formSubmitted(villain) {
    this.valid.emit(villain);
  }
}
