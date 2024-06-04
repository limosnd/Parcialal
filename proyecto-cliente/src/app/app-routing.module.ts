import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCelularComponent } from './crear-celular/crear-celular.component';
import { ListarCelularesComponent } from './listar-celulares/listar-celulares.component';

const routes: Routes = [
  { path: 'crear-celular', component: CrearCelularComponent },
  { path: 'listar-celulares', component: ListarCelularesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true,
      onSameUrlNavigation: 'reload'
    })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
