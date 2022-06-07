import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioCriarComponent } from './components/usuario/usuario-criar/usuario-criar.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioLeituraComponent } from './components/usuario/usuario-leitura/usuario-leitura.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

import localePt from '@angular/common/locales/pt';
import { DatePipe, registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
import { UsuarioDeletarComponent } from './components/usuario/usuario-deletar/usuario-deletar.component';
import { MatNativeDateModule } from '@angular/material/core';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioCriarComponent,
    UsuarioLeituraComponent,
    RedDirective,
    ForDirective,
    UsuarioEditarComponent,
    UsuarioDeletarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
