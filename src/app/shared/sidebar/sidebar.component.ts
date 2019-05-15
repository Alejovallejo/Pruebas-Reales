import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/services.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../modelos/usuario.modelo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  
  usuario: Usuario;

  constructor(public _sidebar: SidebarService,
              public _usaurioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usaurioService.usuario;
  }


}
