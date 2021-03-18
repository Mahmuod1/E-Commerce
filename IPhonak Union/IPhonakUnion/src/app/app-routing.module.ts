import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorationPageComponent } from './pages/exploration-page/exploration-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent,children:[
    {path:'exploration/:explore',component:ExplorationPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
