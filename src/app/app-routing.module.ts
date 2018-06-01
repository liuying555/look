import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './layout/header/header.component';
import { SiderbarComponent } from './layout/siderbar/siderbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { LayerComponent } from './layout/layer/layer.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/layer', pathMatch: 'full' },
  { path: 'layer', component: LayerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
