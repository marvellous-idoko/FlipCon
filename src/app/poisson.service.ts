import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoissonService {
  
  // server = 'http://localhost:3000/';
  server = 'https://api-sansti-kudi.herokuapp.com/'

  constructor(private Http: HttpClient, private r: Router) { }
  // sav(a:string,b:string,user:{}){
  //   var headers = new HttpHeaders();
  //   headers.append('Content-Type', 'applicatiion/json');
  //    this.Http.get(
  //     this.server +
  //      'updAcct/'+a+'/'+b+
  //      '/'+user['nod']+
  //      '/'+user['aod']+
  //      '/'+user['aor']+
  //      '/'+user['nor'],

  //       { headers: headers });
  //       this.intBankTrans()

  // }
lok
 c:{};
payloan(){
 
  var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
     return  this.Http.post(this.server + 'payloan/' + "i11233", { headers: headers })
}
 loanDet(id:string){
   this.lok = id
  var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
     return  this.Http.get(this.server + 'loanDet/' + id, { headers: headers })
    
}

gh(){
  console.info(this.lok)
  var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
       return this.Http.get(this.server + 'loanDet/' + this.lok, { headers: headers })  
}


  sav(a: string, b: string, user: {}, acct) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    this.Http.get(
      this.server +
      'updAcct/' + a + '/' + b +
      '/' + user['nod'] +
      '/' + user['aod'] +
      '/' + user['aor'] +
      '/' + user['nor'],

      { headers: headers })
      .subscribe(e => {
        console.info(e)
      })
    return this.intBankTrans(acct,a)
  }
   intBankTrans(acctNo,amt) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'intBankEnq/' + acctNo+"/"+amt, { headers: headers })
  }

genID(g:{}){
  var headers = new HttpHeaders();
  headers.append('Content-Type', 'applicatiion/json');
  return this.Http.post(this.server + 'genTranID',g, { headers: headers })
}

  retrAcctBal(user: {}) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(this.server + 'retrAcctBal/' + user['account_no'], { headers: headers })
  }
  retrCred(user: {}): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'retrCred/' + user['account_no'], { headers: headers })
  }
  retrDebit(user: {}): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'retrDebit/' + user['account_no'], { headers: headers })
  }
  chAcct(s: string) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'chAcct/' + s, { headers: headers })
  }
  vrfBvn(bvn: string) {
    let h = JSON.parse(localStorage.getItem("user"))
    console.log(h['account_no'])
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'verifyBVN/' + bvn + "/" + h['account_no'], { headers: headers })
      
  }
  loan(d: {}) {

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'loan', { a: d, abtBiz: JSON.parse(localStorage.getItem("user"))['abtBiz'], acctId: JSON.parse(localStorage.getItem("user"))['account_no'] },
      { headers: headers })
  }
  loanHis(): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'loanHis/' + JSON.parse(localStorage.getItem("user"))['account_no'], { headers: headers })
  }
  loans(): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'loans', { headers: headers })
  }
  rejOff(d: string) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'rejOffer/' + d, { headers: headers })
  }
  getOffs(): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'getOffers/' + JSON.parse(localStorage.getItem("user"))['account_no'], { headers: headers })
  }
  acpOff(d: string) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'accOffer/' + JSON.parse(localStorage.getItem("user"))['account_no'], { headers: headers })
  }
  withdraw(s): Observable<any> {
    console.info('swplkpw')
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(
      this.server + 'withdrawal', { amt: s, id: JSON.parse(localStorage.getItem("user"))['account_no'] }, { headers: headers })
  }
  submitOffer(d: {}) {
    console.info(d)
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(
      this.server + 'submitOffer', { offer: d, id: JSON.parse(localStorage.getItem("user"))['account_no'] }, { headers: headers })
  }
  nameEnq(acctNo) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.get(
      this.server + 'nameEnq/' + acctNo, { headers: headers })
  }
  genWitId(d){
    console.info(d)
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(
      this.server + 'withID',d, { headers: headers })
 
  }
}
