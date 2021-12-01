import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sapatos-adultos',
  templateUrl: './sapatos-adultos.component.html',
  styleUrls: ['./sapatos-adultos.component.css']
})
export class SapatosAdultosComponent implements OnInit {
  public sapatosAd = ['Alpargata Feminina c/ Borboleta', 'Alpargata Lona Moleca' , 'Tenis Esportivo Feminino', 'Tenis Casual Feminino', 'Tamanco Salto Medio', 'Coturno Masculino em Couro', 'Coturno Masculino Pegada Camelo', 'Tenis Casual Slip', 'Tenis Paulo', 'Sapatenis Casual Germany']

  constructor() { }

  ngOnInit(): void {
  }

}
