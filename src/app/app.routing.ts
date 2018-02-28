import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { UsuariosComponent } from './usuarios.component';
import { NotificacoesComponent } from './notificacoes.component';
import { LinksComponent } from './links.component';
import { BackupComponent } from './backup.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'notificacoes', component: NotificacoesComponent},
    {path:'links', component: LinksComponent},
    {path:'backup', component: BackupComponent},
    {path:'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);