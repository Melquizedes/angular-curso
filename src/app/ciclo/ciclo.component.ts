import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit , OnChanges {
  @Input() valorInicial: number;
  constructor() {
    console.log('constructor');

  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }





  ngOnInit(): void {
    console.log('On INIT !');
  }

}
