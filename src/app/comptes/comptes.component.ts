import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Compte} from "../model/compte";
import {CompteService} from "../services/compte.service";
import {Observable} from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperationService} from "../services/operation.service";
import {ClientService} from "../services/client.service";


@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

  idClient !: number;
  comptes$ !: Observable<Compte[]> ;
  rib !:string;
  depotFormGroup !: FormGroup
  constructor(private activatedRoute : ActivatedRoute ,
              private compteService : CompteService ,
              private router : Router ,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private operationService : OperationService ,
              private clientService : ClientService) {
    this.idClient=activatedRoute.snapshot.params?.['idClient'];

  }

  ngOnInit(): void {
    this.getCompte(this.idClient);

  }

  getCompte(idClient ?: number ){
    this.comptes$ =  this.compteService.getComptes(idClient);
  }

  afficherExtrait(rib: any) {
    this.router.navigateByUrl("/operation/"+rib);
  }


  open(content: any , rib : string, typeOperation: string) {
    this.rib=rib
    this.chargerDepot(rib,typeOperation);
    this.modalService.open(content)
  }

  chargerDepot(rib : string, typeOperation:string){
  this.depotFormGroup = this.fb.group({
    rib : this.fb.control(rib) ,
    montantOperation : this.fb.control("" , [Validators.required]),
    typeOperation : this.fb.control(typeOperation)
  })
  }


  saveOperation(depotFormGroup: FormGroup) {
    this.operationService.saveOperation(depotFormGroup.value).subscribe({
      next: ()=> {
        alert("L'insertion a été effectué avec succée")
        this.router.navigateByUrl("/comptes/"+this.idClient)

      },
      error:err=>{
        alert("Erruer lors de l'insértion");
        console.log(err.message)
      }
    })

  }
}
