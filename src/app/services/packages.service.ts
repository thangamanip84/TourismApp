import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { CompanyProfile } from '../model/company-profile';
import { CompanyPackage } from '../model/CompanyPackage';


const baseUrl = 'https://localhost:5001';

//const baseUrlCom='https://localhost:8000/api/v1/branch';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  /**
   *
   */
  constructor(private http: HttpClient) {
   
  }
  private getHeader():HttpHeaders {
    let header =  new HttpHeaders();
    header.append("Access-Control-Allow-Origin","http://localhost:4200/");
    header.append('Content-Type', 'application/json');
    //header.append("Access-Control-Allow-Methods", "POST");

    return header;
  }

  getAll(): Observable<CompanyProfile[]> {
    const header = this.getHeader();
    let option = {headers: header};
    return this.http.get<CompanyProfile[]>(`${baseUrl}/api/getAll`);
  }
  

  get(id: any): Observable<CompanyProfile> {
    const header = this.getHeader();
    let option = {headers: header};
    console.log(option);

    
    return this.http.get<CompanyProfile>(`${baseUrl}/api/v1/branch/${id}`);
  }

  findByName(branchName: string): Observable<CompanyProfile[]> {
    // const header = this.getHeader();
    // let option = {headers: header};
    return this.http.get<CompanyProfile[]>(`${baseUrl}/api/v1/GetBybranchName/${branchName}`);
  }
  findById(branchId:any): Observable<CompanyProfile[]> {
    // const header = this.getHeader();
    // let option = {headers: header};
    return this.http.get<CompanyProfile[]>(`${baseUrl}?branchid=${branchId}`);
  }
  findByPlaces(places: string): Observable<CompanyProfile[]> {
    // const header = this.getHeader();
    // let option = {headers: header};
    return this.http.get<CompanyProfile[]>(`${baseUrl}?places=${places}`);
  }

  create(companyPackage: CompanyPackage): Observable<any> {
    let header = this.getHeader();
    let option = {headers : header};
    
    console.log(companyPackage);
    console.log(option);
   console.log( JSON.stringify(companyPackage));
    return this.http.post<CompanyPackage>(`${baseUrl}/api/addPackage`,JSON.stringify(companyPackage),{
       headers: new HttpHeaders({
           'Content-Type':  'application/json',
           'access-control-allow-origin':'http://localhost:4200/'
         })
    }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return "Error Occured"
      }));
  }

  update(id: number, data: CompanyProfile): Observable<any> {
    let header = this.getHeader();
    let option = {headers : header};
    console.log(data);
    return this.http.put(`${baseUrl}/api/v1/updatePackage/${id}`,JSON.stringify(data),{
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'access-control-allow-origin':'http://localhost:4200/'
        })
   });
  }
  
}
