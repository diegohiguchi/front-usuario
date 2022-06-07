import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Usuario } from "./usuario.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  baseUrl = "https://localhost:7212/api/Usuarios";
  baseUrlEscolaridade = "https://localhost:7212/api/Escolaridades";

  constructor(private snackBar: MatSnackBar, private http: HttpClient,
    private datePipe: DatePipe) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(usuario: Usuario): Observable<Usuario> {
    let formData=new FormData();
    formData.append("nome", usuario.nome);
    formData.append("sobreNome", usuario.sobrenome);
    formData.append("email", usuario.email);
    formData.append("dataNascimento", this.datePipe.transform(usuario.dataNascimento,"yyyy-MM-dd"));
    formData.append("escolaridadeId", usuario.escolaridadeId.toString());
    formData.append("file", usuario.file);

    return this.http.post<Usuario>(this.baseUrl, formData).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(usuario: Usuario): Observable<Usuario> {
    let formData=new FormData();
    formData.append("id", usuario.id.toString());
    formData.append("nome", usuario.nome);
    formData.append("sobreNome", usuario.sobrenome);
    formData.append("email", usuario.email);
    formData.append("dataNascimento", this.datePipe.transform(usuario.dataNascimento,"yyyy-MM-dd"));
    formData.append("escolaridadeId", usuario.escolaridadeId.toString());

    if(usuario.file !== null)
      formData.append("file", usuario.file);

    const url = `${this.baseUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, formData).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Usuario>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  download(fileName: string): Observable<HttpEvent<Blob>> {
    const url = `${this.baseUrl}/download/${fileName}`;
    return this.http.get(url, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    }); 
  }

  readAllSchooling(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrlEscolaridade).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
