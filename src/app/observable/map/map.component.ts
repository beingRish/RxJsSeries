import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  // Subscriptions
  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;

  // Messages
  msg1: any;
  msg2: any;

  constructor(private _designUtility: DeisgnUtilityService){}

  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    

    // Ex - 01

    this.sub1 = broadCastVideos.pipe(
      map(data => 'video ' + data)
      )
      .subscribe(res => {
        this.msg1 = res;
        
      })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);


    // Ex - 02

    this.sub2 = broadCastVideos.pipe(
      map(data => data * 3)
      )
      .subscribe(res => {
        this.msg2 = res;
        
      })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);


    // Ex - 03

    const members = from([
      {id: 1, name: 'Rishabh'},
      {id: 2, name: 'Ritik'},
      {id: 3, name: 'Vishwjeet'},
      {id: 4, name: 'Shashank'},
      {id: 5, name: 'Suryanshu'},
      {id: 6, name: 'Antul'},
      {id: 7, name: 'Ranjay'},
      {id: 8, name: 'Prince'},
    ])

    members.pipe(
      map(data => data.name)
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer')
    })

  }
}
