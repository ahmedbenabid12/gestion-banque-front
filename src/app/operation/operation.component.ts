import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Detailoperation} from "../model/detailoperation";
import {Observable} from "rxjs";
import {OperationService} from "../services/operation.service";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  rib !: string
  historiqueOperation$ !: Observable<any>
  currentPage : number = 0 ;
  size : number = 4 ;


  constructor(private activatedRoute : ActivatedRoute ,
              private operationService : OperationService) {
    this.rib=activatedRoute.snapshot.params?.['rib'];
  }

  ngOnInit(): void {
    this.getHistoriqueOperation();
  }

  getHistoriqueOperation(){
    this.historiqueOperation$ = this.operationService.getHistoriqueOperation(this.rib , this.currentPage , this.size );
  }


  goToPage(page: number) {
    this.currentPage = page ;
    this.getHistoriqueOperation();
  }
}
