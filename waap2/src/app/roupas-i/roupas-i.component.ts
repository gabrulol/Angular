import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-i',
  templateUrl: './roupas-i.component.html',
  styleUrls: ['./roupas-i.component.css']
})
export class RoupasIComponent implements OnInit {
  public roupasInf = ['Jaqueta Bebe Carter c/Capuz', 'Blusa Moletom c/ Capuz', 'Camisa Infatil Manga Longa', 'Camisa Infantil Manga Curta', 'Bermuda Infantil', 'Kit Cuecas Carter', 'Kit Sunga Carter', 'Calça Jeans Carter', 'Calça Moleto Carter', 'Conjunto Pijamas Carter']

  constructor() { }

  ngOnInit(): void {
  }

}
