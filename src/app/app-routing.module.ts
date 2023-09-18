import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path:'app',
    loadChildren:()=> import('./ragister/ragister.module').then(m=>m.RagisterModule)
  },
  {
    path: 'dashboard',
    loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
 
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
