import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTalhaoComponent } from './table-talhao.component';

describe('TableTalhaoComponent', () => {
  let component: TableTalhaoComponent;
  let fixture: ComponentFixture<TableTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Teste init', () => {
    expect(component).toBeTruthy();
  });
});
