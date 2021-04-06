import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.dataSource = {
      id: "XXX",
      name: 'DONO 1',
      area: 50,
      listTalhao: [
        {id: "YYY",
          area: 10,
          qtdProdutos: 5,
          produtividade: 0.5,
          idFarm: "xxx"
        }
      ]
    };
    fixture.detectChanges();
  });

  it('Teste open modal inclui talhao', () => {
    const modalTalhao = 'modalTalhao';
    component.openModalTalhao(modalTalhao, component.dataSource);
  });

  it('Teste open modal consulta talhao', () => {
    const modalConsulta = 'modalConsulta';
    component.openModalConsultaTalhao(modalConsulta, component.dataSource);
  });

  it('Teste remove farm', () => {
    const id = 'XXX';
    component.dataSource = [{
      id: "XXX",
      name: 'DONO 1',
      area: 50,
      listTalhao: [
        {id: "YYY",
          area: 10,
          qtdProdutos: 5,
          produtividade: 0.5,
          idFarm: "xxx"
        }
      ]
    }];
    component.removeFarm(id);
  });

  it('Teste open modal consulta talhao', () => {

    component.dataSource = [{
      id: "XXX",
      name: 'DONO 1',
      area: 50,
      listTalhao: [
        {id: "YYY",
          area: 10,
          qtdProdutos: 5,
          produtividade: 0.5,
          idFarm: "xxx"
        }
      ]
    }];

    const listTalhao = [
      {id: "YYY",
        area: 10,
        qtdProdutos: 5,
        produtividade: 0.5,
        idFarm: "xxx"
      }]

    component.passTalhaoToTableFarm(listTalhao);
  });

});
