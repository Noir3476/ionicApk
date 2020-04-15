import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions }  from '@angular/http';
import 'rxjs/add/operator/map';
let apiUrl = 'https://testinghost3476.000webhostapp.com/api/'
// let apiUrl = 'http://localhost/testing/'

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    //console.log('Hello AuthServiceProvider Provider');
  }

  postData(type, body) {
    let headers = new Headers();
    
    headers.append('content-type','application/json');
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      
      console.log(apiUrl + type, JSON.stringify(body), {headers: headers});
      this.http.post(apiUrl + type, JSON.stringify(body), options)
      .subscribe(res => {
        console.log("ini res "+res.json());
        
        resolve(res.json());
      }, (err) => {
        console.log("ini error "+err);
        
        reject(err);
      });
    });
  }

  getDataParams(type, body){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      // headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });    
      console.log(apiUrl + type +'/'+body , JSON.stringify(body));
       
      this.http.get(apiUrl + type +'/'+body , JSON.stringify(body))
      .subscribe(res=>{
        resolve(res.json());
      }, (err)=>{
        reject(err);
      })
    });
  }

  getData(type){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers:headers });
      this.http.get( apiUrl + type, options)
      .subscribe(res=>{
        resolve(res.json());
      }, (err)=>{
        reject(err);
      });
    });
  }

}
