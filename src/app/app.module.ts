import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { FooterCopyrightsComponent } from './footer-copyrights/footer-copyrights.component';
import { FooterSocialMediaComponent } from './footer-social-media/footer-social-media.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchResultTopTenComponent } from './search-result-top-ten/search-result-top-ten.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { CommentComponent } from './comment/comment.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { JsonFilterByPipe } from './pipes/json-filter-by.pipe';
import { HttpInterceptorJWTService } from './service/http/http-interceptor-jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    SearchComponent,
    RegisterComponent,
    FooterCopyrightsComponent,
    FooterSocialMediaComponent,
    HeaderComponent,
    LogoComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    SearchResultComponent,
    SearchResultTopTenComponent,
    FavouriteComponent,
    ArraySortPipe,
    CommentComponent,
    SearchFilterPipe,
    JsonFilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorJWTService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
