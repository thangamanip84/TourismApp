import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
//import { CompanyProfile } from "src/app/model/company-profile";
import { PackagesService } from "src/app/services/packages.service";
import { NgModel } from "@angular/forms";
import { CompanyPackage } from "src/app/model/CompanyPackage";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  curDate=new Date();
  companyProfile: CompanyPackage = {
    branchId: 0,
    branchName: '',
    place: '',
    website: '',
    contact: '',
    email: '',
    tariff: 0.0
  };
  submitted = false;

  constructor(private packageService: PackagesService) { }
  
  
  savePackage(): void {

  //   "BranchId": 0,
  // "BranchName": "string",
  // "Places": "string",
  // "Website": "string",
  // "Contact": "string",
  // "Email": "string",
  // "Tariff": 0,
  // "updatedAt": "2022-11-07T16:53:17.982Z",
  // "id": {}
 //const tariff : Number = this.companyProfile.Tariff;

//  {
//   "branchid": 0,
//   "branchName": "string",
//   "place": "string",
//   "website": "string",
//   "contact": "string",
//   "email": "string",
//   "tariff": 0,
//   "createdAt": "2022-11-09T04:01:15.406Z",
//   "updatedAt": "2022-11-09T04:01:15.407Z"
// }
  // const data = {
  //   id:{},
  //   branchid: 0,
  //   branchName: this.companyProfile.BranchName,
  //   place: this.companyProfile.Places,
  //   website: this.companyProfile.Website,
  //   contact: this.companyProfile.Contact,
  //   email:this.companyProfile.Email,
  //   tariff: this.companyProfile.Tariff,
  //   //createdAt: this.curDate,
  //   updatedAt:this.curDate
   
  // };
    
    //console.log(this.companyProfile.Tariff);
    this.packageService.create(this.companyProfile)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPackage(): void {
    this.submitted = false;
    this.companyProfile = {
      //id:{},
      branchId : 0,
      branchName : '',
      place: '',
      website:'',
      contact:'',
      email:'',
      tariff:0.0

    };
  }

}
