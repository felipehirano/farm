import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultaTalhaoComponent } from './modal-consulta-talhao.component';

describe('ModalConsultaTalhaoComponent', () => {
  let component: ModalConsultaTalhaoComponent;
  let fixture: ComponentFixture<ModalConsultaTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConsultaTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultaTalhaoComponent);
    component = fixture.componentInstance;
    component.dataFarm =
    {
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
});
