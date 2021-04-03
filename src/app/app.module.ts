import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalTalhaoComponent } from './modal-talhao/modal-talhao.component';
import { TableTalhaoComponent } from './table-talhao/table-talhao.component';
import { ModalConsultaTalhaoComponent } from './modal-consulta-talhao/modal-consulta-talhao.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    ModalTalhaoComponent,
    TableTalhaoComponent,
    ModalConsultaTalhaoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
