import { Component, OnInit } from '@angular/core';
import {ClientService} from "../services/client.service";
import {Client} from "../model/client";
import {Observable, of, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients$ !: Observable<Client[]>;
  msgErreur !:string ;
  seachFormGroupe !: FormGroup

  constructor(private clientService : ClientService ,
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.getClients() ;
    this.chargerFormulaireRecherche();
  }


  chargerFormulaireRecherche(){
    this.seachFormGroupe = this.fb.group({
      nom : this.fb.control("")
    })
  }

  searchClients(seachFormGroupe:FormGroup) {
    this.clients$=this.clientService.searchClients(seachFormGroupe.value.nom);
  }

  listeComptesClient(idClient: any) {
    this.router.navigateByUrl("/comptes/"+idClient);
  }



}
