import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Injectable()

export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService,
              public router: Router
    
    ){
  

  }


  canActivate(){

    if(this._usuarioService.estaLogueado()){
      
      console.log('PASO EL GUARD');    
          
      return true;

        }else{

          console.log('BLoqueado por guard');
          this.router.navigate(['/login']);

        }
    

    return true;
  }
  
  

}
