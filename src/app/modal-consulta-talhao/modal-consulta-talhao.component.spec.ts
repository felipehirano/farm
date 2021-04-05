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
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
