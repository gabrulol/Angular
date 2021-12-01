import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moda-intima',
  templateUrl: './moda-intima.component.html',
  styleUrls: ['./moda-intima.component.css']
})
export class ModaIntimaComponent implements OnInit {
  public modaInt = ['Kit Calcinhas Microfibra Preta', 'Calcinha Buiquini Renda', 'Calcinha Fio Dental', 'Calcinha String', 'Calcinha Hot Pant', 'Sutia Cobertura Total', 'Sutia Push Strappy', 'Sutia Meia Taça', 'Robe Feminino Chiffon', 'Camisola Curta']

  constructor() { }

  ngOnInit(): void {
  }

}
