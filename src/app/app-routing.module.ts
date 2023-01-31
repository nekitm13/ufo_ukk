import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FkComponent } from './pages/fk/fk.component';
import { YearComponent } from './pages/fk/pages/year/year.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "fk", component: FkComponent, children:[
    {path: "year", component: YearComponent}
  ]},
  

  {path: "**", redirectTo: "main"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
