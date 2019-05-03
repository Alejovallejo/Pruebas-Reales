import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


import Swal from'sweetalert2';   


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;  
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<Number> = new EventEmitter();

  constructor() {

   }

  ngOnInit() {
  }


  incremenDecre(valor){
    if(this.porcentaje > 100.01){
      Swal.fire('100% es el maximo.');
      this.porcentaje = this.porcentaje = 100;
    }else if(this.porcentaje <= 0){
        Swal.fire('El minimo es 0');
        this.porcentaje = this.porcentaje = 0;
    }else{
      this.porcentaje = this.porcentaje + valor;
      this.txtProgress.nativeElement.focus();
      this.cambioValor.emit(this.porcentaje);
    }
  }


  valorNeutral(){
    if(this.porcentaje > 100 || this.porcentaje < 0){
      Swal.fire('Este valor es demasiado grande o pequeño, por defecto 50 ');
      this.porcentaje = this.porcentaje = 50;
          }
     }

  

  
  onChanges(newValue: number){
      
      console.log(newValue);

      this.txtProgress.nativeElement.focus();
      this.cambioValor.emit(this.porcentaje);
  }

}
