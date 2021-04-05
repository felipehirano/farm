import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTalhaoComponent } from './modal-talhao.component';

describe('ModalTalhaoComponent', () => {
  let component: ModalTalhaoComponent;
  let fixture: ComponentFixture<ModalTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTalhaoComponent);
    component = fixture.componentInstance;
    component.dataFarm = {
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

  it('Teste add talhao', () => {
    component.addTalhao();
  });

  it('Teste add talhao', () => {
    const id = 'XXX';
    component.removeTalhao(id);
  });

});
