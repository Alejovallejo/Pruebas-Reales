import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,  Subscriber,  Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
import Swal from 'sweetalert2';


 

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription = new Subscription;

  constructor() { 



    this.subscription = this.regresaObservable().subscribe(
    numero => console.log('sub', numero),
    error => console.log('Error en el Obs', error),
    ()=> console.log('El observador Termino!.')
    );

   }

  ngOnInit() {
  }


  ngOnDestroy(){
    
    Swal.fire('La pagina se va a cerrar.')
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any>{
    

    return new Observable( (observer: Subscriber<any>) => {

    let contador = 0;

    let intervalo = setInterval(() => {
        
      contador += 1;

      const salida = {
        valor: contador
      };

      observer.next(salida);

      

      if(contador  === 10){
        clearInterval(intervalo);
        observer.complete();
      }

      // if(contador === 2){
      //   clearInterval(intervalo);
      //   observer.error('!Error Auxilio')
      // }

    }, 1000);
    
      }).pipe(
    
        map( resp  => {
          return resp.valor
        }),
        filter( (valor, index) => {
  
        if((valor % 2)==0){
          return true

        }else{
          
          return false
        }

        
        })
      
      )

    
  }


}
