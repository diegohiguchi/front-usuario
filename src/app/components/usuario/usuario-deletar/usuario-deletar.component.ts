import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from "./../usuario.service";
import { Usuario } from "./../usuario.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-usuario-deletar",
  templateUrl: "./usuario-deletar.component.html",
  styleUrls: ["./usuario-deletar.component.css"],
})
export class UsuarioDeletarComponent implements OnInit {
  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.readById(id).subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  deletarUsuario(): void {
    this.usuarioService.delete(this.usuario.id).subscribe(() => {
      this.usuarioService.showMessage("Usuário excluido com sucesso!");
      this.router.navigate(["/usuarios"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/usuarios"]);
  }
}
