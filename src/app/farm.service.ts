import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  calcProdutividadeFarm(listTalhao: any): number{
    let somaProdutividade: number = 0;

    listTalhao.forEach((item: { produtividade: number; }) => {
      somaProdutividade = somaProdutividade + item.produtividade;
    });

    return somaProdutividade;
  }

  generateId(): string{
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  constructor() { }
}
