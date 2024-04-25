import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruit/home/home.component';
import { CreateComponent } from './fruit/create/create.component';
import { EditComponent } from './fruit/edit/edit.component';


  const routes: Routes = [
    { path: '', redirectTo: 'fruit', pathMatch: 'full' }, // Redirect home URL to 'fruit'
    { path: 'fruit', component: HomeComponent }, // Route for 'fruit' path
    {path: '', redirectTo:'fruit',pathMatch:'full'},
    {path: 'fruit/create',component:CreateComponent},
    {path: 'fruit/edit/:id',component:EditComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
