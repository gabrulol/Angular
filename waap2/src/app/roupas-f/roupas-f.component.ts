import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-f',
  templateUrl: './roupas-f.component.html',
  styleUrls: ['./roupas-f.component.css']
})
export class RoupasFComponent implements OnInit {
  public roupasFem = ['Vestido','Vestido Xadrez', 'Vestido Listrado' , 'Short De Malha', 'Vestido De Cetim', 'Vestido Longo', 'Vestido Curto', 'Top Preto', 'Top Colors', 'Top Geek']

  constructor() { }

  ngOnInit(): void {
  }

}
