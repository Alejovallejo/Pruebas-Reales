import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario.modelo';
import { URL_SERVICIOS } from 'src/app/config/config';
import 'rxjs/add/operator/map'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { 
    console.log('Servicio de usuario listo para usar :)');
    this.cargarStorage();
  }

  estaLogueado(){
    
    return (this.token.length > 5) ? true: false;
  }


  cargarStorage(){
    
    if(localStorage.getItem('token')){

      this.token = localStorage.getItem('tokeb');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));

    }else{
      
      this.token = '';
      this.usuario = null;

    }

  }

  guardarStorage(id: string, token: string, usuario: Usuario  ){


    localStorage.setItem('id', id );
    localStorage.setItem('id', token );
    localStorage.setItem('id', JSON.stringify(usuario));
    
    this.usuario = usuario;
    this.token = token;
  }


  logout(){

      this.usuario = null;
      this.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('usuario ');

      this.router.navigate(['/login']);
  }


  loginGoogle(token:string){

    let url = URL_SERVICIOS + '/login/google'
    
    return this.http.post( url, {token} )
                .map((resp: any) => {
                   this.guardarStorage(resp.id, resp.token, resp.usuario); 
                   return true;
                });
  }



  login( usuario: Usuario, recordar: boolean = false ){

    if(recordar ){
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }
    
    let url = URL_SERVICIOS + '/login';
    


    return this.http.post( url, usuario )
                .map(  (resp: any) => {
                  
                  this.guardarStorage(resp.id, resp.token, resp.usuario); 


                  return true;

                });


              

  }



crearUsuario( usuario: Usuario ){

    let url = URL_SERVICIOS + '/usuario';

    return this.http.post( url, usuario )
        .map( (resp: any) => {
          
          Swal.fire({
            title: 'Usuario Creado',
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          })

          return resp.usuario;

    });

}

}
