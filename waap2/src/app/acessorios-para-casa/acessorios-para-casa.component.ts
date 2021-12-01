import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios-para-casa',
  templateUrl: './acessorios-para-casa.component.html',
  styleUrls: ['./acessorios-para-casa.component.css']
})
export class AcessoriosParaCasaComponent implements OnInit {
  public acessorioCasa = ['Jogo De Cama', 'Cocha', 'Cobertor e Mantas', 'Travesseiros', 'Tapetes', 'Toalhas de Bano', 'Toalha de Rosto', 'Mesa', 'Puff', 'Prateleiras', 'Nicho']

  constructor() { }

  ngOnInit(): void {
  }

}
