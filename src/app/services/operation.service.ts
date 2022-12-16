import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Operation} from "../model/operation";
import {Client} from "../model/client";
import {Observable} from "rxjs";
import {Detailoperation} from "../model/detailoperation";

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  host  = environment.host;

  constructor(private httpClient : HttpClient) { }


  saveOperation(operation : Operation) {
    return  this.httpClient.post<any>(this.host+"/api/operation",operation);
  }

  getHistoriqueOperation(rib: string, page: number, size: number) : Observable<any> {
    return  this.httpClient.get<any>(this.host+"/api/operation/"+rib+"?page="+page+"&size="+size);
  }
}
