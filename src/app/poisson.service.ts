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
  headers = new HttpHeaders()
  constructor(private Http: HttpClient, private r: Router) { 
  this.headers.append('Content-Type', 'applicatiion/json');
  }
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

  //       { headers: this.headers });
  //       this.intBankTrans()

  // }
lok
 c:{};

 wese = JSON.parse(localStorage.getItem("user"))
payloan(){
     return  this.Http.post(this.server + 'payloan/' + "i11233", { headers: this.headers })
}
 loanDet(id:string){
   this.lok = id
     return  this.Http.get(this.server + 'loanDet/' + id, { headers: this.headers })   
}
noOfLoansCompleted(){
  console.info(this.wese['account_no'])
  return  this.Http.get(this.server + 'noOfLoansCompleted/' + this.wese['account_no'], { headers: this.headers })   
}
noOfLoansUnpaid(){
   return  this.Http.get(this.server + 'noOfLoansUnpaid/' + this.wese['account_no'], { headers: this.headers })   
}
noOfProposals(){
  return  this.Http.get(this.server + 'noOfProposals/' + this.wese['account_no'], { headers: this.headers })   
}
amountInvested(){
  return  this.Http.get(this.server + 'amountInvested/' + this.wese['account_no'], { headers: this.headers })   

}
offerDet(id:string){
  this.lok = id
 
   
    return  this.Http.get(this.server + 'offerDet/' + id, { headers: this.headers })
   
}
editProposal(f:{}){

  return this.Http.post(
    this.server + 'editProp', { offer: f, id: this.wese['account_no'] }, { headers: this.headers })

}
trgtSrch(a:{}){
  console.info(a)
  
    
     return  this.Http.post(this.server + 'trgsearch',a ,{ headers: this.headers })
}
fund(id:number){
  
    
       return this.Http.get(this.server + 'fundLoan/' +id, { headers: this.headers })  

}
gh(){
  console.info(this.lok)
  
    
       return this.Http.get(this.server + 'loanDet/' + this.lok, { headers: this.headers })  
}


  sav(a: string, b: string, user: {}, acct) {
    
    
    this.Http.get(
      this.server +
      'updAcct/' + a + '/' + b +
      '/' + user['nod'] +
      '/' + user['aod'] +
      '/' + user['aor'] +
      '/' + user['nor'],

      { headers: this.headers })
      .subscribe(e => {
        console.info(e)
      })
    return this.intBankTrans(acct,a)
  }
   intBankTrans(acctNo,amt) {
    
    
    return this.Http.get(
      this.server + 'intBankEnq/' + acctNo+"/"+amt, { headers: this.headers })
  }

genID(g:{}){

  return this.Http.post(this.server + 'genTranID',g, { headers: this.headers })
}

  retrAcctBal(user: {}) {
    
    
    return this.Http.get(this.server + 'retrAcctBal/' + user['account_no'], { headers: this.headers })
  }
  retrCred(user: {}): Observable<any> {
    
    
    return this.Http.get(
      this.server + 'retrCred/' + user['account_no'], { headers: this.headers })
  }
  retrDebit(user: {}): Observable<any> {
    
    
    return this.Http.get(
      this.server + 'retrDebit/' + user['account_no'], { headers: this.headers })
  }
  chAcct(s: string) {
    
    
    return this.Http.get(
      this.server + 'chAcct/' + s, { headers: this.headers })
  }
  vrfBvn(bvn: string) {
    let h = JSON.parse(localStorage.getItem("user"))
    console.log(h['account_no'])
    
    
    return this.Http.get(
      this.server + 'verifyBVN/' + bvn + "/" + h['account_no'], { headers: this.headers })
      
  }
  loan(d: {}) {
    
    
    return this.Http.post(this.server + 'loan',
     { a: d, 
      b: this.wese},{ headers: this.headers })
  }
  loanHis(): Observable<any> {
    
    
    return this.Http.get(
      this.server + 'loanHis/' + this.wese['account_no'], { headers: this.headers })
  }
  loans(): Observable<any> {
    
    
    return this.Http.get(
      this.server + 'loans', { headers: this.headers })
  }
  rejOff(d: string) {
    
    
    return this.Http.get(
      this.server + 'rejOffer/' +this.wese['account_no']+"/"+ d, { headers: this.headers })
  }
  getOffs(): Observable<any> {
    
    
    return this.Http.get(
      this.server + 'getOffers/' + this.wese['account_no'] +'/', { headers: this.headers })
  }

    getMyLoans(): Observable<any> {
    
    
    return this.Http.get(
      this.server + 'getMyLoans/' + this.wese['account_no'] +'/', { headers: this.headers })
  }

  getLoans(): Observable<any> {
    
    
    return this.Http.get(this.server + 'getLoans/' + this.wese['account_no'] +'/', { headers: this.headers })
  }
  acpOff(d: string) {
    
    
    return this.Http.get(
      this.server + 'accOffer/' + this.wese['account_no'] +'/'+d, { headers: this.headers })
  }
  withdraw(s): Observable<any> {
    console.info('swplkpw')
    
    
    return this.Http.post(
      this.server + 'withdrawal', { amt: s, id: this.wese['account_no'] }, { headers: this.headers })
  }
  submitOffer(d: {}) {
    
    
    return this.Http.post(
      this.server + 'submitOffer', { offer: d, id: this.wese['account_no'] }, { headers: this.headers })
  }

  incrViews(id:string){
    
     this.Http.get( this.server + 'incrViews/' + id, { headers: this.headers }).subscribe(de=>console.info(''))
  }

  nameEnq(acctNo) {
    
    
    return this.Http.get(
      this.server + 'nameEnq/' + acctNo, { headers: this.headers })
  }
  genWitId(d){
    console.info(d)
    
    
    return this.Http.post(
      this.server + 'withID',d, { headers: this.headers })
 
  }
}
