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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
