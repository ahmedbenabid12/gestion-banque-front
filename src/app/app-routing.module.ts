import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {NewclientComponent} from "./newclient/newclient.component";
import {ComptesComponent} from "./comptes/comptes.component";
import {OperationComponent} from "./operation/operation.component";

const routes: Routes = [

  {path : "" , component : ClientComponent} ,
  {path : "newclient" , component : NewclientComponent} ,
  {path : "comptes/:idClient" , component : ComptesComponent},
  {path : "operation/:rib" , component : OperationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
