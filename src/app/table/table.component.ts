import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() dataSource:any;

  removeFarm(id: any): void {
    this.dataSource.forEach((item: { id: any; }, index: any) => {
      if(item.id === id) this.dataSource.splice(index, 1);
    });

  }

  ngOnInit() {}

}
