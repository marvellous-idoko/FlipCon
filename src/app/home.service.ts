import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private Http: HttpClient) { }
  // Sandbox-Key                     your-sandbox-key
  // content-type                    application/json
  // accept                          application/json
  // x-ibm-client-id                 f
  kol() {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    headers.append('accept', 'applicatiion/json');
    headers.append('x-ibm-client-id', 'f');
    headers.append(' Sandbox-Key', '37de4935bccdfa335f59b3783a0368d0');

    return this.Http.post('https://sandboxapi.fsi.ng/fcmb/payments/nip/transfers', {
      "nameEnquiryRef": "999214190218121217000001177403",
      "destinationInstitutionCode": "999063",
      "channelCode": "2",
      "beneficiaryAccountNumber": "0000000000",
      "beneficiaryAccountName": "OBIOHA O. GODDY",
      "beneficiaryBankVerificationNumber": "1",
      "beneficiaryKYCLevel": "3",
      "originatorAccountName": "OKUBOTE IDOWU OLUWAKEMI",
      "originatorAccountNumber": "0000000000",
      "transactionNarration": "Esb Test",
      "paymentReference": "12345",
      "amount": "100.1",
      "traceId": "12345",
      "chargeAmount": "52.59",
      "platformType": "ESB"
    }, { headers: headers }).subscribe(e => { console.info(e) })
  }
   server = 'http://localhost:3000/';

  // kolw() {
  //   var headers = new HttpHeaders();
  //   headers.append('Content-Type', 'applicatiion/json');

  //   return this.Http.post(this.server+'transferFunds', { headers: headers }).subscribe(e => {
  //     console.info(e)
  //   })
  // }
  // koll() {
  //   var headers = new HttpHeaders();
  //   headers.append('Content-Type', 'applicatiion/json');
  //   return this.Http.get('http://localhost:3000/verifyBVN', { headers: headers })
  // }
}
