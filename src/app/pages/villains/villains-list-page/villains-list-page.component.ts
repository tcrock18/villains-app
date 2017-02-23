import { Component, OnInit } from '@angular/core';
import {VillainService} from "../../../villain.service";

@Component({
  selector: 'app-villains-list-page',
  templateUrl: './villains-list-page.component.html',
  styleUrls: ['./villains-list-page.component.css']
})
export class VillainsListPageComponent implements OnInit {

  villains: any;

  constructor(protected villainService: VillainService) { }

  ngOnInit() {
    this.villains = this.villainService.getVillains();
  }

}
