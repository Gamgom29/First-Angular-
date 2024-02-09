import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path : '' , redirectTo:'home' , pathMatch:"full"},
  {path :'home' , component:HomeComponent , title :'Home'},
  {path : "about" , component : AboutComponent , title : 'About'},
  {path : "contact" , component : ContactComponent , title : 'contact'},
  {path : "portfolio" , component : PortfolioComponent , title : 'Portfolio'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
