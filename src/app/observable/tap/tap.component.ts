import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit{

  myColor: string = '';

  constructor(private _designUtility : DeisgnUtilityService){}

  ngOnInit(): void {

    const source = interval(1500);

    // Ex - 01
    const Arr = ['Rishabh', 'Divyam', 'Vikash', 'Rahul', 'Utkarsh', 'Pankaj', 'Harsh', 'Saurabh'];

    let obsSubs: Subscription = new Subscription

    obsSubs = source.pipe(
      tap(res => {
        if(res==4){
          obsSubs.unsubscribe();
        }
      }),
      map(res => Arr[res]),
    )
    .subscribe(res => {
      this._designUtility.print(res, 'elContainer')
    })


    // Ex - 02
  
    const Colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Black', 'White'];
    let obsSubs2: Subscription = new Subscription;
    obsSubs2 = source.pipe(
      tap(res => {
        this.myColor = Colors[res]
        console.log('tap =>', res);
        if(res == 7){
          obsSubs2.unsubscribe();
        }
      }),
      map(res => Colors[res])
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer2')
    })




  }
}
