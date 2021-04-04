import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-consulta-talhao',
  templateUrl: './modal-consulta-talhao.component.html',
  styleUrls: ['./modal-consulta-talhao.component.css']
})
export class ModalConsultaTalhaoComponent implements OnInit {

  @Input() dataFarm:any;

  constructor() { }

  ngOnInit(): void {}

}
