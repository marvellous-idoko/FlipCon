import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { RegLogService } from '../reg-log.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import * as faceapi from 'face-api.js'
import {user} from '../user'


@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.css']
})
export class EnrolComponent implements OnInit {
  ed = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.pattern(this.ed),])
    ],
    contact: [234, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(11)])
    ],
    address: [null, Validators.required],
    abtBiz: [null, Validators.required],
    state: [null, Validators.required],
    type: [null, Validators.required],
    pwd: [null, Validators.compose([
      Validators.required, Validators.minLength(6)])
    ],
  });

  types = [
    { name: 'Business', abbreviation: 'primary' },
    { name: 'Lender', abbreviation: 'vc' },
    { name: 'Bank', abbreviation: 'vc' },
    { name: 'Fin Tech', abbreviation: 'vc'},  
    { name: 'Govt MDA', abbreviation: 'vc'}
  ]
op = [
  {val:'M',li:'Male'},
  {val:'F',li:'Female'},
  {val:'R',li:'Rather Not Say'}
]
bizType = [
  {val:'Biz',li:'Business'},
  {val:'Lender',li:'Lender'}
]
ind = [
  {val:'fashion',li:'fashion'},
  {val:'Agriculture',li:'Agriculture'}
]

sizes = [
  {val:1},
  {val:5},
  {val:10},
  {val:15},
  {val:20},
  {val:50},
  {val:100},
  {val:500},
  {val:700},
  {val:1000},
  {val:1200},
  {val:1500},
]
states = [
    { name: 'Kano', abbreviation: 'Kano' },
    { name: 'Kaduna', abbreviation: 'Kaduna' },
    { name: 'Niger', abbreviation: 'Niger' },
    { name: 'Katsina', abbreviation: 'Katsina' },
    { name: 'Bornu', abbreviation: 'Bornu' },
    { name: 'Sokoto', abbreviation: 'Sokoto' },
    { name: 'Jigawa', abbreviation: 'Jigawa' },
    { name: 'Taraba', abbreviation: 'Taraba' },
    { name: 'Kwara', abbreviation: 'Kwara' },
    { name: 'Nasarawa', abbreviation: 'Nasarawa' },
    { name: 'Zamfara', abbreviation: 'Zamfara' },
    { name: 'Kebbi', abbreviation: 'Kebbi' },
    { name: 'Kogi', abbreviation: 'Kogi' },
    { name: 'Gombe', abbreviation: 'Gombe' }
  ];

  isLinear = false;
  firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // addressForm : FormGroup;

  // constructor(r) {}
  accountType:Boolean;
  secondFormGroup = this.fb.group({
    acctType:['',Validators.required],
    nameOfBiz: ['', Validators.required],
    sizeOfBiz: ['', Validators.required],
    cac: ['', Validators.required],
    sex: ['', Validators.required],
    bizContact: ['', Validators.required],
    DOI: ['', Validators.required],
    industry: ['', Validators.required],
    abtBiz: ['', Validators.required],
    address: ['', Validators.required],
    bizAddress: ['', Validators.required],
    name:['', Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.pattern(this.ed),])
    ],
    bizEmail: [null, Validators.compose([
      Validators.required, Validators.pattern(this.ed),])
    ],
    contact: [234, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(11)])
    ],
    pwd: [null, Validators.compose([
      Validators.required, Validators.minLength(6)])
    ],
  });

  reg(){
    // console.info(this.secondFormGroup.value)

    let canvas =   <HTMLCanvasElement> this.d.getElementById('canvas');
     canvas.toBlob((b)=>{
     let u :user = {
      sizeOfBiz:this.secondFormGroup.get('sizeOfBiz').value,
      DOI : new Date(),
      abtBiz : this.secondFormGroup.get('abtBiz').value,
      address :this.secondFormGroup.get('address').value,
      bizAddress : this.secondFormGroup.get('bizAddress').value,
      bizContact : this.secondFormGroup.get('bizContact').value,
      bizEmail : this.secondFormGroup.get('bizEmail').value,
      cacId :this.secondFormGroup.get('cac').value,
      contact : this.secondFormGroup.get('contact').value,
      email : this.secondFormGroup.get('email').value,
      type : this.secondFormGroup.get('acctType').value,
      pwd : this.secondFormGroup.get('pwd').value,
      industry  : this.secondFormGroup.get('industry').value,
      photo :   new File([b],this.secondFormGroup.get('name').value, {type:'image/png'}) ,
      name :  this.secondFormGroup.get('name').value,
      nameOfBiz:this.secondFormGroup.get('nameOfBiz').value,
      sex:this.secondFormGroup.get('sex').value
    }
    let g
    navigator.geolocation.getCurrentPosition((p)=>{
      // console.info(p)
      u.locationLat = p.coords.latitude
      u.locationLong = p.coords.longitude
      this.s.reg(u) .subscribe(s => {
      switch (s['code']) {
        case 1: {
          this.hu = s;
          this.show = true;
          this.r.navigateByUrl('login')
        } break;
        case 0: {
          // r = confirm(s['msg'])
          this.hu = s;
          this.show = true;
          this.ii = ``          
        } break;
        default: alert(s)
      }
    })
    },(r)=>{
      // console.info(r)
      alert('unable to retrieve you location.'+"\n"+"Click the Register button again and approve the location request")
    })
    },'image/png',1);
 
    
    }
   ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
      email: [null, Validators.compose([
        Validators.required, Validators.pattern(this.ed),])
      ],
      contact: [234, Validators.compose([
        Validators.required, Validators.minLength(10), Validators.maxLength(11)])
      ],
      sex:[''],
    });
    // this.video = this.d.getElementById('video');
  this.canvas  =  <HTMLCanvasElement> this.d.getElementById('canvas');
  this.photo  = <HTMLImageElement>this.d.getElementById('photo');
    this.video = <HTMLVideoElement>this.d.getElementById('video');
  
}

  constructor(@Inject(DOCUMENT) private d: Document, private fb: FormBuilder, private l: Location, private s: RegLogService, private r: Router) { }
  goback() {
    this.l.back();
  }
      canvas:HTMLCanvasElement = null
       photo = null;
      startbutton = this.d.getElementById('startbutton');
       width = 320;    // We will scale the photo width to this
       height = 0;     // This will be computed based on the input stream
   
      streaming = false;
     video:HTMLVideoElement = null;

   strm
fxn(){ 
     let video =  <HTMLVideoElement>this.d.getElementById('video');
    video.style.display = 'block'
    let  startbutton = this.d.getElementById('startbutton');
    var ctxt =  this.canvas
    // var cdghg  =
    var dd =  this.d.getElementById('photo');

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
    video.srcObject = stream;
    video.play();

    
  })
  .catch(function(err) {
      console.log("An error occurred: " + err);
  });
  return video;

  }
  t = false
takepicture() {
  this.t = true;
    let canvas =   <HTMLCanvasElement> this.d.getElementById('canvas');
    let photo = <HTMLImageElement> this.d.getElementById('photo')
    var df = canvas.getContext('2d')
    df.drawImage(this.fxn(), 0, 0,this.fxn().width,  this.fxn().height - 10);

    this.fxn().style.display = 'none'
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      stream.getVideoTracks()[0].stop()
  })
    // console.info('height: '+this.fxn().height+"\n" +"width: "+ this.fxn().width)
    var ds;
     canvas.toBlob( (blob)=>{
      ds =  window.URL.createObjectURL(blob)
       photo.setAttribute('src', ds);
    this.face()
    },'image/png',1)
   
  }
    async face(){
      const MODEL_URL = './'
    // await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
    await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
    // await faceapi.loadTinyFaceDetectorModel(MODEL_URL)
    // await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
   await faceapi.loadFaceLandmarkModel(MODEL_URL)
  await faceapi.loadFaceRecognitionModel(MODEL_URL)
                let p = <HTMLImageElement> this.d.getElementById('photo')
                console.info(p.getAttribute('src'))
      console.info('successfully loaded models')
      // let ok = this.d.getElementById("lop")
      let si = await faceapi.fetchImage(p.getAttribute('src'))
      let fullFaceDescriptions = await faceapi.detectAllFaces(si)
      this.t = false
      if(fullFaceDescriptions.length == 0 || ''){
      
        alert('Face Detection Failed. Take snapshot agaimn ')
      }else{  
     let video =  <HTMLVideoElement>this.d.getElementById('video');
     video.style.display = 'none'
      const canva = <HTMLCanvasElement> this.d.getElementById('kik')
      
      fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions, si)
      // fullFaceDescription = faceapi.resizeResults(fullFaceDescription, ok)
      // console.info(fullFaceDescriptions)
      // console.info(fullFaceDescription)
      
      faceapi.draw.drawDetections(canva, fullFaceDescriptions)
      // faceapi.draw.drawDetections(canvas, fullFaceDescription)
      }
  }
  
  show: Boolean;
  hu: any; 
  login(qwe) {
    this.r.navigateByUrl('login')              
  }   
  onSubmit() {

    // console.info(this.addressForm.value)
    if(this.addressForm.valid){
      this.d.getElementById('loader').classList.add('show');

    this.s.reg(this.addressForm.value)
      .subscribe(s => {
        switch (s['code']) {
          case 1: {
            this.hu = s;
            this.show = true;

          } break;
          case 0: {
            // r = confirm(s['msg'])
            this.hu = s;
            this.show = true;
            this.ii = ``          
          } break;
          default: alert(s)
        }
      })
    }
  }
  close() {
    this.show = false;
  }
  ii; 
  // ngOnInit() {}
}
