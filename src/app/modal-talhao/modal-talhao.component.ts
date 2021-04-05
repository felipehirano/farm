import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormTalhao } from '../form';
import { FarmService } from '../farm.service'

@Component({
  selector: 'app-modal-talhao',
  templateUrl: './modal-talhao.component.html',
  styleUrls: ['./modal-talhao.component.css']
})
export class ModalTalhaoComponent implements OnInit {

  @Output() passTalhaoToTableFarm = new EventEmitter<String>();
  @Input() dataFarm:any;

  maxAreaTalhao: any;
  idFarm: string = '';
  showMessageRangeMax: boolean = false;

  model = new FormTalhao(null, null, null);
  dataSourceTalhao:any = [];

  constructor(private farmService:FarmService){}

  addTalhao(): void {

    if(this.checkMaxArea(this.dataSourceTalhao, this.model.area)) {
      this.dataSourceTalhao.push({
        id: this.farmService.generateId(),
        area: this.model.area,
        qtdProdutos: this.model.qtdProdutos,
        produtividade: this.calcProdutividade(this.model.area, this.model.qtdProdutos),
        idFarm: this.idFarm
      });

      this.passTalhaoToTableFarm.emit(this.dataSourceTalhao);
      this.showMessageRangeMax = false;
    } else {
      this.showMessageRangeMax = true;
    }

    this.model = new FormTalhao(null, null, null);
  }

  checkMaxArea(listTalhao: any[], areaNewTalhao: number): boolean {
    let totalArea = 0;
    let retorno = true;

    if(listTalhao.length > 0){
      listTalhao.forEach((item: { area: number; }) => {
        totalArea = totalArea + item.area;
      });
    }

    totalArea = totalArea + areaNewTalhao;

    if(totalArea > this.maxAreaTalhao) retorno = false;

    return retorno;
  }

  calcProdutividade(area:any, qtdProdutos: any): number {
    return Number((qtdProdutos/area).toFixed(2));
  }

  removeTalhao(id: any): void {
    this.dataSourceTalhao.forEach((item: { id: any; }, index: any) => {
      if(item.id === id){
        this.dataSourceTalhao.splice(index, 1);
      }
    });

    this.passTalhaoToTableFarm.emit(this.dataSourceTalhao);
  }

  ngOnInit(): void {
    this.maxAreaTalhao = this.dataFarm.area;
    this.idFarm = this.dataFarm.id;
    this.dataSourceTalhao = this.dataFarm.listTalhao;
  }

}
