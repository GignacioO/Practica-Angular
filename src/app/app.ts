import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inventario } from './inventario/inventario';

@Component({
  imports: [RouterOutlet, Inventario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tarea1001');
}
