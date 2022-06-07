import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Usuários',
      icon: 'storefront',
      routeUrl: '/usuarios'
    }
  }

  ngOnInit(): void {
  }

  navigateToUsuarioCriar(): void {
    this.router.navigate(['/usuarios/criar'])
  }

}
