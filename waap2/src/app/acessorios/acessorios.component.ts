import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {
  public acessorio = ['Kit Presilha p/ Cabelo', 'Kit Piranha de Cabelo', 'Cinto Feminino', 'Cinto Casual Masculino', 'Bone Azul Aba Curva', 'Carteira Masculina', 'Colar Masculino', 'Kit Pulseira Masculina', 'Oculos De Sol Unissex Aviador', 'Chapeu Masculino Bucket']

  constructor() { }

  ngOnInit(): void {
  }

}
