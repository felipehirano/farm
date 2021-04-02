import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dataSource:any = [];

  updateList(evento: any) {
    this.dataSource = evento;
  }

  ngOnInit() {
  }
}
