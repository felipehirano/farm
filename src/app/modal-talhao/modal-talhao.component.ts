import { Component, OnInit, Input } from '@angular/core';
import { FormTalhao } from '../form';

@Component({
  selector: 'app-modal-talhao',
  templateUrl: './modal-talhao.component.html',
  styleUrls: ['./modal-talhao.component.css']
})
export class ModalTalhaoComponent implements OnInit {

  model = new FormTalhao(null, null, null);
  dataSourceTalhao:any = [];

  addTalhao(): void {

    this.dataSourceTalhao.push({
      id: this.generateId(),
      area: this.model.area,
      qtdProdutos: this.model.qtdProdutos,
      produtividade: this.calcProdutividade(this.model.area, this.model.qtdProdutos)
    });

    this.model = new FormTalhao(null, null, null);
  }

  generateId(): string{
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  calcProdutividade(area:any, qtdProdutos: any): number {
    return Number((qtdProdutos/area).toFixed(2));
  }

  constructor() { }

  ngOnInit(): void {}

}
