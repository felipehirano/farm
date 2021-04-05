import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormTalhao } from '../form';

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

  addTalhao(): void {

    if(this.checkMaxArea(this.dataSourceTalhao, this.model.area)) {
      this.dataSourceTalhao.push({
        id: this.generateId(),
        area: this.model.area,
        qtdProdutos: this.model.qtdProdutos,
        produtividade: this.calcProdutividade(this.model.area, this.model.qtdProdutos),
        idFarm: this.idFarm
      });

      this.passTalhaoToTableFarm.emit(this.dataSourceTalhao);
      localStorage.setItem('talhao', JSON.stringify(this.dataSourceTalhao));
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

  generateId(): string{
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  calcProdutividade(area:any, qtdProdutos: any): number {
    return Number((qtdProdutos/area).toFixed(2));
  }

  removeTalhao(id: any): void {
    this.dataSourceTalhao.forEach((item: { id: any; }, index: any) => {
      if(item.id === id){
        this.dataSourceTalhao.splice(index, 1);
        localStorage.setItem('talhao', JSON.stringify(this.dataSourceTalhao));
      }
    });

    this.passTalhaoToTableFarm.emit(this.dataSourceTalhao);
  }

  constructor() { }

  ngOnInit(): void {
    this.maxAreaTalhao = this.dataFarm.area;
    this.idFarm = this.dataFarm.id;
    // this.dataSourceTalhao = this.dataFarm.listTalhao;
    console.log(this.dataFarm.listTalhao);
    this.dataSourceTalhao = JSON.parse(localStorage.getItem('talhao') || this.dataFarm.listTalhao);
  }

}
