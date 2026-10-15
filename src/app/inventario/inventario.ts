import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {
  objetos = signal([
    {nombre: 'Mapa', cantidad: ' cantidad: 1'},
    {nombre: 'Poción de vida', cantidad: ' cantidad: 5'},
    {nombre: 'Botella de agua', cantidad: ' cantidad: 2'},
    
  ])



}
