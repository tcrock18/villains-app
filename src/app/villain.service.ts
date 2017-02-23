import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

const ENDPOINT = 'https://villains-api.herokuapp.com/v1/villains';

@Injectable()
export class VillainService {


  constructor(private http: Http) {
  }

  getVillains(): Observable<any> {

    console.log(this.http);
    return this.http.get(ENDPOINT)
      .map((response) => response.json());

  }

  getVillain(id) {
    return {}
  }
}
