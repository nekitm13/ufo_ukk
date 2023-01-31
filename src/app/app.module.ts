import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { FkComponent } from './pages/fk/fk.component';
import { MainComponent } from './pages/main/main.component';
import { BtnComponent } from './components/btn/btn.component';
import { DOComponent } from './pages/do/do.component';
import { YearLastComponent } from './pages/fk/year-last/year-last.component';
import { YearCurrentComponent } from './pages/fk/year-current/year-current.component';
import { VSOHComponent } from './pages/vsoh/vsoh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnNavComponent,
    FkComponent,
    MainComponent,
    BtnComponent,
    DOComponent,
    YearLastComponent,
    YearCurrentComponent,
    VSOHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
