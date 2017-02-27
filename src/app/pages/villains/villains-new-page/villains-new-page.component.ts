import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villains-new-page',
  templateUrl: './villains-new-page.component.html',
  styleUrls: ['./villains-new-page.component.css']
})
export class VillainsNewPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onValid(villain) {
    console.log(villain);
  }

}
