import { Usuario } from "./../usuario.model";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from "./../usuario.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-usuario-editar",
  templateUrl: "./usuario-editar.component.html",
  styleUrls: ["./usuario-editar.component.css"],
})
export class UsuarioEditarComponent implements OnInit {
  usuario: Usuario;
  escolaridades: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuarioService.readAllSchooling().subscribe((escolaridades) => {
      this.escolaridades = escolaridades;
    });

    const id = +this.route.snapshot.paramMap.get("id");
    this.usuarioService.readById(id).subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  editarUsuario(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.usuarioService.showMessage("Usuário atualizado com sucesso!");
      this.router.navigate(["/usuarios"]);
    });
  }

  onFileSelected(event: any): void {
    this.usuario.file = event.target.files[0] ?? null;
  }

  cancel(): void {
    this.router.navigate(["/usuarios"]);
  }
}
