import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FarmService } from './farm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dataSource:any = [];
  dataSourceTalhao: any = [];

  constructor(private farmService:FarmService){}

  updateList(evento: any) {
    this.dataSource = evento;
  }

  getProdutividade(listFarm: any[], listTalhao: any[]) {
    if(listTalhao.length > 0) {
      listFarm.forEach((itemFarm: { id: any; produtividade: number; }) => {
        listTalhao.forEach((itemTalhao: { idFarm: any; }) => {
          if(itemFarm.id === itemTalhao.idFarm) {
            itemFarm.produtividade = Number(this.farmService.calcProdutividadeFarm(listTalhao).toFixed(2));
          }
        });
      });
    }
  }

  ngOnInit() {
    this.dataSource = JSON.parse(localStorage.getItem('farm') || '[]');

    console.log(this.dataSource);
    // this.dataSourceTalhao = JSON.parse(localStorage.getItem('talhao') || '[]');

    this.getProdutividade(this.dataSource, this.dataSourceTalhao);
  }
}
