import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExplorationPageComponent } from './pages/exploration-page/exploration-page.component';


import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ReplacePipe } from './custm-pipes/replace.pipe';
import { SearchPipe } from './custm-pipes/search.pipe';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RoleGuard,AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor'
import { CollectionComponent } from './pages/collection/collection.component';
import { AdminAddProductComponent } from './dashbored/admin-add-product/admin-add-product.component';
import { AdminInterFaceComponent } from './dashbored/admin-inter-face/admin-inter-face.component';
import { AdminEditProductComponent } from './dashbored/admin-edit-product/admin-edit-product.component';
import { AsideLinksComponent } from './components/aside-links/aside-links.component';
import { WirelessComponent } from './pages/wireless/wireless.component';
import { AllTypeComponent } from './pages/all-type/all-type.component';
import { AllCategoryComponent } from './pages/all-category/all-category.component';
import { TypeModelComponent } from './pages/type-model/type-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ExplorationPageComponent,
    ProductDetailsComponent,
    ReplacePipe,
    ProductsComponent,
    SearchPipe,
    SearchResultComponent,
    CartComponent,
    ProfilePageComponent,
    CollectionComponent,
    AdminAddProductComponent,
    AdminInterFaceComponent,
    AdminEditProductComponent,
    AsideLinksComponent,
    WirelessComponent,
    AllTypeComponent,
    AllCategoryComponent,
    TypeModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},RoleGuard,AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
