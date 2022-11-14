import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';
import { AddPackageComponent } from './components/add-package/add-package.component';
import { PackagelistComponent } from './components/packagelist/packagelist.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagedetailsComponent,
    AddPackageComponent,
    PackagelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
