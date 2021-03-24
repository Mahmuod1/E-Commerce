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
import { ButtonComponent } from './components/button/button.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ReplacePipe } from './custm-pipes/replace.pipe';
import { SearchPipe } from './custm-pipes/search.pipe';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
<<<<<<< HEAD
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor'
=======
import { CollectionComponent } from './pages/collection/collection.component';
>>>>>>> fa9154d2874c2c065fe2a33058de0588564f6b9d

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
    ProductsComponent,
    ButtonComponent,
    ProductDetailsComponent,
    ReplacePipe,
    SearchPipe,
    SearchResultComponent,
<<<<<<< HEAD
    ProfilePageComponent
=======
    CollectionComponent
>>>>>>> fa9154d2874c2c065fe2a33058de0588564f6b9d
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
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
