import { Component, OnInit } from '@angular/core';
import {VillainService} from "../../../villain.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-villains-list-page',
  templateUrl: './villains-list-page.component.html',
  styleUrls: ['./villains-list-page.component.css']
})
export class VillainsListPageComponent implements OnInit {

  villains: any;

  constructor(protected villainService: VillainService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.villainService.getVillains()
      .subscribe(villains => {
        this.villains = villains;
      }, err => {
        console.error(err);
      });

    const id = +this.route.snapshot.params['id'];
  }

}
