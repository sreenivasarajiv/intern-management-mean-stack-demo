import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternComponent } from './intern/intern.component';
import { DepartmentsComponent } from './departments/departments.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'departments',
    pathMatch: 'full'
  },
  {
    path: 'interns',
    component: InternComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
