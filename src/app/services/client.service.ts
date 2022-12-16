import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   host  = environment.host;

  constructor(private httpClient : HttpClient) { }


  getClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.host+"/api/client")
  }

  searchClients(value: string) {
    return this.httpClient.get<Client[]>(this.host+"/api/client/searchClients?nom="+value)
  }

  saveClient(client: Client) {
    return this.httpClient.post<Client>(this.host+"/api/client",client);
  }

}
