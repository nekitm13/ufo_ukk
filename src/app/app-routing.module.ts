import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DOComponent } from './pages/do/do.component';
import { FkComponent } from './pages/fk/fk.component';
import { YearCurrentComponent } from './pages/fk/year-current/year-current.component';
import { YearLastComponent } from './pages/fk/year-last/year-last.component';
import { MainComponent } from './pages/main/main.component';
import { VSOHComponent } from './pages/vsoh/vsoh.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "fk", component: FkComponent },
  { path: "fk/year_last", component: YearLastComponent },
  { path: "fk/year_current", component: YearCurrentComponent },
  { path: "DO", component: DOComponent },
  { path: "vsoh", component: VSOHComponent},
  { path: "**", redirectTo: "/main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
