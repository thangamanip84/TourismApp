import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';
import { AddPackageComponent } from './components/add-package/add-package.component';
import { PackagelistComponent } from './components/packagelist/packagelist.component';
const routes: Routes = [
  { path: '', redirectTo: 'packages', pathMatch: 'full' },
  { path: 'packages', component: PackagelistComponent },
  { path: 'packages/:id', component: PackagedetailsComponent },
  { path: 'add', component: AddPackageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
