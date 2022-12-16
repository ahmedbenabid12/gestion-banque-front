import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ClientService} from "../services/client.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  newClientFomrGroup !: FormGroup
  constructor( private clientService : ClientService ,
               private fb : FormBuilder ,
               private router:Router) { }

  ngOnInit(): void {
    this.chargerFormulaire();
  }


  chargerFormulaire(){
    this.newClientFomrGroup = this.fb.group({
      nomClient : this.fb.control("" , [Validators.required]) ,
      prenomClient : this.fb.control("" ) ,
      email : this.fb.control("" , [Validators.required ,  Validators.email]) ,
      login : this.fb.control("" , [Validators.required]) ,
      password : this.fb.control("password", )
    })
  }

  saveClient(newClientFomrGroup: FormGroup) {
    this.clientService.saveClient(newClientFomrGroup?.value).subscribe({
      next: ()=> {
        alert("L'insertion a été effectué avec succée")
        this.router.navigateByUrl("/client")

      },
      error:err=>{
        alert("Erruer lors de l'insértion");
          console.log(err.message)
      }
    })
  }
}
