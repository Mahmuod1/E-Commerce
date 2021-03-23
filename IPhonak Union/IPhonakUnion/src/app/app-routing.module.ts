import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ExplorationPageComponent } from './pages/exploration-page/exploration-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent,children:[
    {path:'exploration/:explore',component:ExplorationPageComponent}
  ]},
  {path:'product-details/:productName',component:ProductDetailsComponent},
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
