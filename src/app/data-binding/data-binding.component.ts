import { Component, OnInit, Input } from '@angular/core';
import { parse } from 'url';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url = 'http://loiane.com';
  cursoAngular: boolean = true;

  urlImagem = 'http://lorempixel.com/g/400/200/';

  valorAtual: number = 566;
  valorSalvo: number;
  isMouseOver: boolean = false;
  @Input() idade:number;

  nomeDoCurso: string = 'angular 4';

  nome: string  = 'abc';

  pessoa: any = {
    nome: 'Melqz',
    idade: '30'
  }
  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
   }

   botaoClicado(){
     alert(this.valorAtual);
   }
   onKeyUp(evento : KeyboardEvent){
       this.valorAtual = parseInt((<HTMLInputElement>evento.target).value);

   }
   salvarValor(evento : KeyboardEvent){

      if(this.valorSalvo > 0)
        this.valorSalvo += parseInt((<HTMLInputElement>evento.target).value);
      else
      this.valorSalvo = parseInt((<HTMLInputElement>evento.target).value);

      (<HTMLInputElement>evento.target).value = "";
   }

   onMouseOverOut(evento){
    if(this.isMouseOver)
    {
      (<HTMLSpanElement>evento.target).textContent = "ESTA VENDO AGORA?";

    }
    else
    (<HTMLSpanElement>evento.target).textContent = "Passe o mouse sobre mim!";

    this.isMouseOver = !this.isMouseOver;
   }

  constructor() { }

  ngOnInit(): void {
  }

}
