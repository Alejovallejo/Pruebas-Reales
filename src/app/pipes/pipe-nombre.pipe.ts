import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNombre'
})


export class PipeNombrePipe implements PipeTransform {

  

  transform(value: any): any {
      
    console.log(Array.from(value));
      
    let nombre = "";

    for (let posicion = 0; posicion < Array.from(value).length; posicion++) {
        
      if(Array.from(value)[posicion] === " "){
        break;
      }
      nombre += Array.from(value)[posicion];
    }

    return nombre;  

    // for(i = 0; i < caracteres.length; i++) {
    //     console.log("El caracter " + i + " es " + caracteres[i]);
    //             }
    //   }

  }


}
