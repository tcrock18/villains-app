import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-villains-delete-villain-page',
  templateUrl: './villains-delete-villain-page.component.html',
  styleUrls: ['./villains-delete-villain-page.component.css']
})
export class VillainsDeleteVillainPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
  }

}
