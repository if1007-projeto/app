import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ContentComponent } from './content/content.component';
import { ContatoComponent } from './contato/contato.component';
import { BuyServiceComponent } from './buy-service/buy-service.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'content.component', component: ContentComponent },
    { path: 'contato.component', component: ContatoComponent },
    { path: 'buy-service.component', component: BuyServiceComponent },
    { path: 'admin.component', component: AdminComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);