import { WojewodztwoComponent } from './pages/wojewodztwo/wojewodztwo.component';
import { PojazdComponent } from './pages/pojazd/pojazd.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '/pojazd', component: PojazdComponent },
  { path: '/wojewodztwo', component: WojewodztwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
