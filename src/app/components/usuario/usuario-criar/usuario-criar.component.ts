import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.css'],
  // providers: [DatePipe]
})
export class UsuarioCriarComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: null,
    escolaridadeId: null,
    file: null,
  }

  escolaridades: any;

  constructor(private usuarioService: UsuarioService,
      private router: Router) { }

    ngOnInit(): void {
      this.usuarioService.readAllSchooling().subscribe((escolaridades) => {
        this.escolaridades = escolaridades;
      });
    }

  criarUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário criado!')
      this.router.navigate(['/usuarios'])
    })

  }

  onFileSelected(event: any): void {
      this.usuario.file = event.target.files[0] ?? null;
  }

  cancel(): void {
    this.router.navigate(['/usuarios'])
  }
}
