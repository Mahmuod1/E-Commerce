import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ExplorationPageComponent } from './pages/exploration-page/exploration-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RoleGuard,AuthGuard } from './auth/auth.guard';
import { CollectionComponent } from './pages/collection/collection.component';
import { AdminInterFaceComponent } from './dashbored/admin-inter-face/admin-inter-face.component';
import { WirelessComponent } from './pages/wireless/wireless.component';
import { AllTypeComponent } from './pages/all-type/all-type.component';
import { AllCategoryComponent } from './pages/all-category/all-category.component';
import { TypeModelComponent } from './pages/type-model/type-model.component';

const routes: Routes = [
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent,children:[
    {path:'exploration/:explore',component:ExplorationPageComponent}
  ]},
  {path:'product-details/:productName',component:ProductDetailsComponent},
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'search/:value',component:SearchResultComponent},
  {path:'registration-page',component:LoginPageComponent},
  {path:'login',component:RegistrationPageComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart-page',component:CartComponent},
  {path:'profile-page',component:ProfilePageComponent,canActivate:[AuthGuard]},
  {path:'products/:type',component:ProductsComponent},
  {path:'collection/:model/:type',component:CollectionComponent},
  {path:'dash-bored',component:AdminInterFaceComponent,canActivate:[RoleGuard]},
  {path:'wireless/:kind',component:WirelessComponent},
  {path:'types/:type',component:AllTypeComponent},
  {path:'categorys/:category/:type',component:AllCategoryComponent},
  {path:'model/:model',component:TypeModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
