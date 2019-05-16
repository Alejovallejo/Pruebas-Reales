import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.modelo';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2';
import { ModealUploadService } from '../../components/modal-upload/modal-upload.service';


declare var swal: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(public _usuariosService: UsuarioService,
              public _modalUploadService: ModealUploadService) { 
    
  }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion
        .subscribe( resp => {

            this.cargarUsuarios()

        });
  }


  mostrarModal(id: string){
    this._modalUploadService.mostartModal('usuarios', id)
  }
  

  
  cargarUsuarios(){
    
    this.cargando = true;

    this._usuariosService.cargarUsuarios( this.desde )
        .subscribe((resp:any) => {

          
          this.totalRegistros = resp.total;
          this.usuarios = resp.usuarios;
          this.cargando = false;
          
            
        });

  }

  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuario(termino: string){

    if(termino.length <= 0){
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuariosService.buscarUsuarios(termino)
        .subscribe((usuarios: Usuario[]) => {
            this.usuarios = usuarios;
            this.cargando = false
        });

  }

  borrarUsuario(usuario: Usuario){

    if(usuario._id === this._usuariosService.usuario._id){
      Swal.fire('No se puede Borrar asi mismo', 'error');
      return;
    }

    Swal.fire({
      title: "Esta seguro?",
      text: 'Esta a punto de borrar a' + usuario.nombre
    })
    .then((borrar) => {
      
        // Swal.fire("Poof! Your imaginary file has been deleted!",)
        console.log(borrar);
        
          if(borrar){

            this._usuariosService.borrarUsuario(usuario._id)
                .subscribe( borrado => {
                    console.log(borrado); 
                    this.cargarUsuarios();
                });

          }


    });

    

  }

  guardarUSuario(usuario: Usuario){

      this._usuariosService.actualizarUsuario(usuario)
          .subscribe();

  }
}
