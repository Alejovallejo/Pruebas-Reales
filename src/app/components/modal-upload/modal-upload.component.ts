import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import Swal from 'sweetalert2';
import { ModealUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {
  

  imagenSubir: File;
  imagenTemp: any;
  
  
    
  constructor(
    public _cargaArchivoService: SubirArchivoService,
    public _modaUploadService: ModealUploadService
  ) {
    
    
   }

  ngOnInit() {
  }


  cerrarModal(){
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modaUploadService.ocultarModal();
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

  subirImagen(){

    this._cargaArchivoService.subirArchivo(this.imagenSubir, this._modaUploadService.tipo, this._modaUploadService.id)
          .then(resp => {

            this._modaUploadService.notificacion.emit(resp);
            this.cerrarModal();
          })
          .catch(erro => {

            console.log('error en la carga');
            
          });

  }


}
