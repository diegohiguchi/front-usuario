import { UsuarioDeletarComponent } from './components/usuario/usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { UsuarioComponent } from "./views/usuario/usuario.component";
import { UsuarioCriarComponent } from './components/usuario/usuario-criar/usuario-criar.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuarios",
    component: UsuarioComponent
  },
  {
    path: "usuarios/criar",
    component: UsuarioCriarComponent
  },
  {
    path: "usuarios/editar/:id",
    component: UsuarioEditarComponent
  },
  {
    path: "usuarios/deletar/:id",
    component: UsuarioDeletarComponent
  },
  {
    path: "usuarios/:id",
    component: UsuarioEditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
