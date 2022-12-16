import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compte} from "../model/compte";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  host  = environment.host;

  constructor(private httpClient : HttpClient) { }

  getComptes(idClient: number | undefined):Observable<Compte[]>{
    return this.httpClient.get<Compte[]>(this.host+"/api/compte/"+idClient);
  }


}
