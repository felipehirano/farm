import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormTalhao } from '../form';

@Component({
  selector: 'app-modal-talhao',
  templateUrl: './modal-talhao.component.html',
  styleUrls: ['./modal-talhao.component.css']
})
export class ModalTalhaoComponent implements OnInit {

  @Output() passTalhaoToTableFarm = new EventEmitter<String>();

  model = new FormTalhao(null, null, null);
  dataSourceTalhao:any = [];

  addTalhao(): void {

    this.dataSourceTalhao.push({
      id: this.generateId(),
      area: this.model.area,
      qtdProdutos: this.model.qtdProdutos,
      produtividade: this.calcProdutividade(this.model.area, this.model.qtdProdutos)
    });

    this.passTalhaoToTableFarm.emit(this.dataSourceTalhao);
    this.model = new FormTalhao(null, null, null);
  }

  generateId(): string{
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  calcProdutividade(area:any, qtdProdutos: any): number {
    return Number((qtdProdutos/area).toFixed(2));
  }

  removeTalhao(id: any): void {
    this.dataSourceTalhao.forEach((item: { id: any; }, index: any) => {
      if(item.id === id) this.dataSourceTalhao.splice(index, 1);
    });

    this.passTalhaoToTableFarm.emit(this.dataSourceTalhao);
  }

  constructor() { }

  ngOnInit(): void {}

}
