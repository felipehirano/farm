import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() dataSource:any;

  closeResult: any;
  idFarm: any;

  constructor(private modalService: NgbModal) {}

  openModalTalhao(content: any, dados: any) {
    this.idFarm = dados.id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  removeFarm(id: any): void {
    this.dataSource.forEach((item: { id: any; }, index: any) => {
      if(item.id === id) this.dataSource.splice(index, 1);
    });
  }

  passTalhaoToTableFarm(listTalhao: any): void{
    this.addListTalhaoOnListFarm(listTalhao, this.idFarm);
  }

  addListTalhaoOnListFarm(listTalhao: { id: any; }[], idFarm: any): void{
    this.dataSource.forEach((item: { id: any; listTalhao: { id: any; }[]; }) => {
      if(item.id === idFarm) {
        item.listTalhao = listTalhao;
      }
    });
  }

  ngOnInit() {}

}
