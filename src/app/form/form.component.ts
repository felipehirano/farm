import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  @Input() dataSource:any;
  @Input() nome: any;
  @Output() onUpdateLIst: any = new EventEmitter();

  model = new Form('', null);

  addFarm(): void {

    this.dataSource.push({
      id: this.generateId(),
      name: this.model.name,
      area: this.model.area,
      listTalhao: []
    });

    this.onUpdateLIst.emit(this.dataSource);

    this.model = new Form('', null);
  }

  generateId(): string{
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  ngOnInit() {
  }

}
