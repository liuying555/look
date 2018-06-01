import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SiderbarComponent } from './layout/siderbar/siderbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { LayerComponent } from './layout/layer/layer.component';
import { LoginComponent } from './common/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderbarComponent,
    FooterComponent,
    ContentComponent,
    LayerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
