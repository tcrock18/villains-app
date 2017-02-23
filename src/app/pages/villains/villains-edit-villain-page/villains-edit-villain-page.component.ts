import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-villains-edit-villain-page',
  templateUrl: './villains-edit-villain-page.component.html',
  styleUrls: ['./villains-edit-villain-page.component.css']
})
export class VillainsEditVillainPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
  }

}
