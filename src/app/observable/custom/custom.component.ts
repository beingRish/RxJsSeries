import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy{

  techStatus : any;
  techStatus2 : any;
  names: any;
  nameStatus : any;
  subs2 : Subscription = new Subscription;

  constructor(private _designUtility: DeisgnUtilityService) {

  }

  ngOnInit(): void {
    
    // Ex - 01 (Manual)

    const cusObs1 = Observable.create((observer : any) => {

      setTimeout(() => {
        observer.next('Angular')
      }, 1000)
      
      setTimeout(() => {
        observer.next('TypeScript')
      }, 2000)

      setTimeout(() => {
        observer.next('Html and Css')  
        observer.complete()     
      }, 3000)

      setTimeout(() => {
        observer.next('JavaScript')
        // observer.error(new Error('Limit Exceed'));
      }, 4000)

      setTimeout(() => {
        observer.next('JQuery') 
      }, 5000)
    })

    cusObs1.subscribe((res: any) => {
      this._designUtility.print(res, 'elContainer')
    },
    () => {
      this.techStatus = 'error'
    },
    ()=>{
      this.techStatus = 'completed';
    })

    // Ex - 02 (Custom Interval)

    const Arr2 = ['Angular', 'Javascript', 'Html', 'Css', 'TypeScript']
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);

        if(count >= 2){
          observer.error('Error Emit');
        }

        if(count >= 5){
          observer.complete();
        }
        count++; 
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe((res: any) => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer2')
    },
    () => {
      this.techStatus2 = 'error'
    },
    ()=>{
      this.techStatus2 = 'completed';
    })

    // Ex - 03 (Random Names)

    const Arr3 = ['Rishabh', 'Ritik', 'Vishwjeet', 'Antul', 'Suryanshu', 'Shashank', 'Vikash']
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);

        if(count >= 3){
          observer.error('Error Emit');
        }

        if(count >= 6){
          observer.complete();
        }
        count++; 
      }, 1000)
    })

    cusObs3.subscribe((res: any) => {
      console.log(res);
      this.names = res;
    },
    () => {
      this.nameStatus = 'error'
    },
    ()=>{
      this.nameStatus = 'completed';
    })

  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}
