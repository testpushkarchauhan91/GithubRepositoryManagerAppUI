import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { ListTodosComponent } from 'src/app/list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from 'src/app/todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultTopTenComponent } from './search-result-top-ten/search-result-top-ten.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: '', component: SearchResultTopTenComponent },
  { path: 'searchResultTopTen', component: SearchResultTopTenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'favourite/:name', component: FavouriteComponent, canActivate: [RouteGuardService] },
  { path: 'comment/:commentId', component: CommentComponent, canActivate: [RouteGuardService] },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'dashboard/:name', component: DashboardComponent, canActivate: [RouteGuardService] },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
