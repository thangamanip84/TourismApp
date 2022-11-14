import { Component, OnInit } from '@angular/core';
import { CompanyProfile } from "src/app/model/company-profile";
import { PackagesService } from "src/app/services/packages.service";

@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})
export class PackagelistComponent implements OnInit {
  curDate=new Date();
  constructor(private packageService: PackagesService) { }

  companyProfiles?: CompanyProfile[];
  currentCompanyProfile: CompanyProfile = {
    id:{},
    BranchId: 0,
    BranchName: '',
    Places: '',
    Website: '',
    Contact: '',
    Email: '',
    Tariff: 0.0,
    //createdAt: this.curDate,
    updatedAt: this.curDate
  };
  currentIndex = -1;
  branchName = '';
  branchId=undefined;
  places='';
  ngOnInit(): void {
    this.retrieveCompanyProfiles();
  }

  retrieveCompanyProfiles(): void {
    this.packageService.getAll()
      .subscribe({
        next: (data) => {
          this.companyProfiles = data;
          console.log(data);
          console.log(this.companyProfiles);
          
        },
        error: (e) => console.error(e)
      });
  }

  // refreshList(): void {
  //   this.retrieveCompanyProfiles();
  //   this.currentCompanyProfile = {
  //     branchName: undefined,
  //     branchid: undefined,
  //     places: undefined,
  //     website: undefined,
  //     contact: undefined,
  //     email: undefined,
  //     tariff: undefined
  //   };
  //   this.currentIndex = -1;
  // }

  setActivePackage(companyProfile: CompanyProfile, index: number): void {
    this.currentCompanyProfile = companyProfile;
    this.currentIndex = index;
  }



  searchbyName(): void {
    this.currentCompanyProfile = {
      id:{},
      BranchId: 0,
      BranchName: '',
      Places: '',
      Website: '',
      Contact: '',
      Email: '',
      Tariff: 0.0,
      //createdAt: this.curDate,
      updatedAt: this.curDate
      };
    this.currentIndex = -1;

    this.packageService.findByName(this.branchName)
      .subscribe({
        next: (data) => {
          this.companyProfiles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  searchbyId(): void {
    this.currentCompanyProfile = {
    id:{},
    BranchId: 0,
    BranchName: '',
    Places: '',
    Website: '',
    Contact: '',
    Email: '',
    Tariff: 0.0,
    //createdAt: this.curDate,
    updatedAt: this.curDate
    };
    this.currentIndex = -1;

    this.packageService.findById(this.branchId)
      .subscribe({
        next: (data) => {
          this.companyProfiles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  searchbyPlace(): void {
    this.currentCompanyProfile = {
      id:{},
      BranchId: 0,
      BranchName: '',
      Places: '',
      Website: '',
      Contact: '',
      Email: '',
      Tariff: 0.0,
      //createdAt: this.curDate,
      updatedAt: this.curDate
    };
    this.currentIndex = -1;

    this.packageService.findByPlaces(this.places)
      .subscribe({
        next: (data) => {
          this.companyProfiles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

  