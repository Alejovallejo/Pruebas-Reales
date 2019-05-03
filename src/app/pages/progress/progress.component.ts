import { Component, OnInit } from '@angular/core';

import { isNumber } from 'util';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  
  porcentaje1: number = 85;
  porcentaje2: number = 20;

  string: string;

  constructor() { }
  
  ngOnInit() {
  }

  actualizarProgressAzul(event: number){
    this.porcentaje1 = event;


  }


  actualizarProgressVerde(event1: number){
    this.porcentaje2 = event1;

  }
  
  // incremenDecre(valor){
  //   if(this.porcentaje > 100){
  //     Swal.fire('100% es el maximo.');
  //     this.porcentaje = this.porcentaje = 100;
  //   }else if(this.porcentaje < 0){
  //       Swal.fire('El minimo es 0');
  //       this.porcentaje = this.porcentaje = 0;
  //   }else{
  //     this.porcentaje = this.porcentaje + valor;
  //   }
  // }


  // valorNeutral(){
  //   if(this.porcentaje > 100 || this.porcentaje < 0){
  //     Swal.fire('Este valor es demasiado grande o pequeño, por defecto 50 ');
  //     this.porcentaje = this.porcentaje = 50;
  //   }

  //   // if(!isNumber(this.porcentaje)){
  //   //   Swal.fire('Solo se admiten numeros')
  //   // }
  // }




}
