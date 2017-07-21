import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetail } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard} from './products/product-guard.service';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'hybris', component: ProductListComponent },
      { path: 'contributors/:url', 
      canActivate:[ProductDetailGuard], component: ProductDetail },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch:'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])],
  declarations: [AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetail,
    WelcomeComponent],
  bootstrap: [AppComponent],
  providers:[ProductDetailGuard]
})
export class AppModule { }
