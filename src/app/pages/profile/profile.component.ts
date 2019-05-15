import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.modelo';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  Usuario: Usuario;

  imagenSubir: File;
  imagenTemp: any;

  constructor(
    public _usuarioService: UsuarioService
  ) { 
  
    this.Usuario = _usuarioService.usuario;

  }

  ngOnInit() {
  }

  guardar(usuario: Usuario){

    this.Usuario.nombre = usuario.nombre;

    if(!this.Usuario.google){


      this.Usuario.email = usuario.email;

    }
    

    this._usuarioService.actualizarUsuario(this.Usuario)
        .subscribe();

  }

  seleccionImagen(archivo){

    if(!archivo){
      this.imagenSubir = null
      return;
    }

    if(archivo.type.indexOf('image')<0){
      Swal.fire('Sólo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result
  }

  cambiarImagen(){

      this._usuarioService.cambiarImagen( this.imagenSubir, this.Usuario._id );

  }

}
