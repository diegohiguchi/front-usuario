import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuario-leitura',
  templateUrl: './usuario-leitura.component.html',
  styleUrls: ['./usuario-leitura.component.css']
})
export class UsuarioLeituraComponent implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade.descricao', 'action']
  progress: any;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
    })
  }

  download(fileName: string): void {
    this.usuarioService.download(fileName).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
      else if (event.type === HttpEventType.Response) {
          this.downloadFile(event, fileName);
      }
    });
  }

  private downloadFile = (data: HttpResponse<Blob>, fileName: string) => {
    const downloadedFile = new Blob([data.body], { type: data.body.type });
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    a.download = fileName;
    a.href = URL.createObjectURL(downloadedFile);
    a.target = '_blank';
    a.click();
    document.body.removeChild(a);
  }

}
