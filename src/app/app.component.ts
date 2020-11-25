import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  idadeApp: number = 500;

  valorPai: number = 15;
  destruir: boolean = false;

  mudarValor(){
    this.valorPai ++;
  }

  destruirCiclo(){
    this.destruir = true;
  }

}
