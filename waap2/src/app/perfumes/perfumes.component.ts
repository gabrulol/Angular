import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.css']
})
export class PerfumesComponent implements OnInit {
  public perfume = ['Kit Perfume Coffret Armani', 'Perfume Kenzo Homme', 'Perfume Yves', 'Perfume Rebel', 'Perfume Atomic', 'Perfume Camper', 'Perfume Iconic', 'Perfume Flor Cereja', 'Perfume Extreme Sport', 'Perfume Joy ']

  constructor() { }

  ngOnInit(): void {
  }

}
