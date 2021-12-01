import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sapatos-infantis',
  templateUrl: './sapatos-infantis.component.html',
  styleUrls: ['./sapatos-infantis.component.css']
})
export class SapatosInfantisComponent implements OnInit {
  public sapatosInf = ['Tenis Casual Infantil Homem Aranha', 'Tenis Casual Juvenil Homem de Ferro', 'Sandalia Papete Juvenil Dakar', 'Sandalia Papete Infantil Homem Aranha', 'Chinelo Infantil', 'Chinelo Infantil Estampado', 'Sandalia Rasteira Princesa Pessego', 'Chinelo Tiras Bichinhos Rosas', 'Tenis Texturizados PomPom', 'Sapatilha Laço Gliter Branco']

  constructor() { }

  ngOnInit(): void {
  }

}
