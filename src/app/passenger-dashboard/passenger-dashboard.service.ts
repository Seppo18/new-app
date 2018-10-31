import { Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map  } from "rxjs/operators";

import { Passenger } from "./models/passenger.interface";


const PASSANGER_API = "/api/passangers";

@Injectable()
export class PasssangerDashboardService {
  constructor(private http: HttpClient) {}

  getPassangers(): Observable<Passenger[]> {
    return this.http.get(PASSANGER_API).pipe(
        map(data => {(console.log(data)); return null; })
    );
  }
}
