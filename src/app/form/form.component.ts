import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { Form } from '../form';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  constructor(private farmService:FarmService){}

  @Input() dataSource:any;
  @Input() nome: any;
  @Output() onUpdateList: any = new EventEmitter();

  model = new Form('', null);

  addFarm(): void {

    this.dataSource.push({
      id: this.farmService.generateId(),
      name: this.model.name,
      area: this.model.area,
      listTalhao: []
    });

    localStorage.setItem('farm', JSON.stringify(this.dataSource));
    this.onUpdateList.emit(this.dataSource);
    this.model = new Form('', null);
  }

  ngOnInit() {}

}
