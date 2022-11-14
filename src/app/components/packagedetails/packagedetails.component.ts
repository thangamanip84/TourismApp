import { Component, Input, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyProfile } from 'src/app/model/company-profile';

@Component({
  selector: 'app-packagedetails',
  templateUrl: './packagedetails.component.html',
  styleUrls: ['./packagedetails.component.css']
})
export class PackagedetailsComponent implements OnInit {

  @Input() viewMode = false;
  curDate=new Date();
  @Input() currentCompanyProfile: CompanyProfile ={
    BranchId: 0,
    BranchName: '',
    Places: '',
    Website: '',
    Contact: '',
    Email: '',
    Tariff: 0.0,
    //createdAt: this.curDate,
    updatedAt: this.curDate,
    id: undefined
  };
  
  message = '';
  
  constructor(
    private  packageService: PackagesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPackages(this.route.snapshot.params["id"]);
    }
  }

  getPackages(id: number): void {
    console.log(this.currentCompanyProfile);
    this.packageService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCompanyProfile = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(tariff: number): void {
    const data : CompanyProfile = {
      id: {},
      BranchId: this.currentCompanyProfile.BranchId,
      BranchName: this.currentCompanyProfile.BranchName,
      Places: this.currentCompanyProfile.Places,
      Website: this.currentCompanyProfile.Website,
      Contact: this.currentCompanyProfile.Contact,
      Email: this.currentCompanyProfile.Email,
      Tariff: this.currentCompanyProfile.Tariff,
      //createdAt: this.curDate,
      updatedAt:this.curDate
    };

    this.message = '';

    this.packageService.update(this.currentCompanyProfile.BranchId, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentCompanyProfile.Tariff = data.Tariff;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updatePackage(): void {
    this.message = '';

    this.packageService.update(this.currentCompanyProfile.id, this.currentCompanyProfile)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This package  was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}


