import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { FkComponent } from './pages/fk/fk.component';
import { MainComponent } from './pages/main/main.component';
import { YearComponent } from './pages/fk/pages/year/year.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnNavComponent,
    FkComponent,
    MainComponent,
    YearComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
