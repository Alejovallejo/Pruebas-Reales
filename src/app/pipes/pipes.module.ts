import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { PipeNombrePipe } from './pipe-nombre.pipe';


@NgModule({
  declarations: [
    ImagenPipe,
    PipeNombrePipe
  ],
  imports: [
    
  ],
  exports: [
    ImagenPipe,
    PipeNombrePipe
  ]
})
export class PipesModule { }