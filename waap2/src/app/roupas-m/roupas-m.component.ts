import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-m',
  templateUrl: './roupas-m.component.html',
  styleUrls: ['./roupas-m.component.css']
})
export class RoupasMComponent implements OnInit {
  public roupasMas = ['Camiseta Xadrez', 'Camiseta Listrada', 'Camiseta Gola Alta', 'Camiseta Polo','Regata',  'Camiseta De Botão' ,'Camiseta De Retalha', 'Camiseta Gamer', 'Camiseta Geek', 'Camiseta Lisa']

  constructor() { }

  ngOnInit(): void {
  }

}
