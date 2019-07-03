import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';;
import { FooterComponent } from './footer/footer.component'
;
import { HeaderComponent } from './header/header.component'
;
import { ContentComponent } from './content/content.component'
;
import { ContatoComponent } from './contato/contato.component'
;
import { BuyServiceComponent } from './buy-service/buy-service.component'
;
import { AdminComponent } from './admin/admin.component'
;
import { MyserviceComponent } from './myservice/myservice.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
,
        FooterComponent
,
        HeaderComponent ,
        ContentComponent ,
        ContatoComponent ,
        BuyServiceComponent ,
        AdminComponent,
        MyserviceComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }