import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit{

  obsMsg: any;

  constructor(private _designUtility: DeisgnUtilityService){}

  ngOnInit(): void {
    
    // OF

    console.log('=========== OF ==========');
    

    const Obs1 = of('Rishabh', 'Ritik', 'Vishwjeet');

    Obs1.subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer')
    })

    const Obs2 = of({a: 'Rishabh', b: 'Ritik', c: 'Vishwjeet'});

    Obs2.subscribe(res => {
      this.obsMsg = res
      console.log('obsMsg=>', this.obsMsg);
    })

    // FROM - Array

    console.log('========== FROM - Array ==========');
    
    let Arr = ['Shashank', 'Suryanshu', 'Vikash'];

    const Obs3 = from(Arr);

    Obs3.subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3')
    })

    // FROM - PROMISE

    const promise = new Promise(resolve => {
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000)
    })

    const Obs4 = from(promise)

    Obs4.subscribe(res => {
      console.log('========== FROM - PROMISE ==========');
      
      console.log('from promise -> ',res);
      this._designUtility.print(res, 'elContainer4')
    })

    // FROM - String

    console.log('========== FROM - String ==========');

    const Obs5 = from('Welcome to Uxtrendz')

    Obs5.subscribe(res => {
      console.log('from promise -> ',res);
      this._designUtility.print(res, 'elContainer5')
    })
  }
}
