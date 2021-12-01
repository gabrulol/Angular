import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogios',
  templateUrl: './relogios.component.html',
  styleUrls: ['./relogios.component.css']
})
export class RelogiosComponent implements OnInit {
  public relogio = ['Relogio Masculino X-Game', 'Relogio SmartWatch GT2', 'Relogio Smartwath Galaxy', 'Kit Relogio Feminino', 'Relogio Feminino Lince Dourado', 'Relogio Feminino X-Games BEGE', 'Relogio Lince Prateado ', 'Relogio Feminino Modaine Prateado', 'Relogio Feminino Mondaine Dourado', 'Relogio Feminino Mondaine Rose']

  constructor() { }

  ngOnInit(): void {
  }

}
