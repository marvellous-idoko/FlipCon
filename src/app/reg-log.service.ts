import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegLogService {
  // server = 'http://localhost:3000/';
     server =      'https://api-sansti-kudi.herokuapp.com/'

  constructor(@Inject(DOCUMENT) private d:Document, private Http: HttpClient, private r: Router) { }
  reg(data: user) {
    console.info(data)
   var  se =  new FormData()
    se.append('photo',data.photo)
    console.info(se.get('photo'))
    // console.info(data.photo)
    // data.photo v = null
    se.append('sizeOfBiz',data.sizeOfBiz)
    se.append('address',data.address)
    se.append('bizAddress',data.bizAddress)
    se.append('bizContact',data.bizContact)
    se.append('bizEmail',data.bizEmail)
    se.append('cacId',data.cacId)
    se.append('contact',data.contact)
    se.append('email',data.email)
    se.append('type',data.type)
    se.append('pwd',data.pwd)
    se.append('industry',data.industry)
    se.append('name',data.name)
    se.append('location',data.locationLong.toString())
    se.append('location',data.locationLat.toString())
    se.append('nameOfBiz',data.nameOfBiz)
    se.append('abtBiz',data.abtBiz)
    se.append('sex',data.sex)


    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'register', se, { headers: headers })
  }
  user: any; rr: any;
  logOut(id:string){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(this.server + 'chkLog/'+id, { headers: headers })

  }
  login(d: {}) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'login', d, { headers: headers })
  }


  checkLogUser() {
    var z = JSON.parse(localStorage.getItem("user"))
    if (z == null || undefined)  this.r.navigateByUrl('gen');
    return z;
    //   var headers = new HttpHeaders();
    // headers.append('Content-Type', 'applicatiion/json');
    // return this.Http.get(this.server + 'chkLog/'+z['account_no'] , { headers: headers })
  }
}
