import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-mobile-notification',
  templateUrl: './mobile-notification.component.html',
  styleUrls: ['./mobile-notification.component.scss']
})
export class MobileNotificationComponent implements OnInit {

  constructor(private _designUtility: DeisgnUtilityService) { }

  notifyData = [
    {
      name: 'X',
      icon: 'assets/x-icon.png',
      time: '4 Second Ago.',
      img: 'https://deep-image.ai/_next/static/media/app-info-generator.bf08e63e.webp',
      strong: 'James Smith',
      p: 'Twitted : Lorem ipsus dolor sit amet consctetur adipisicing elit.'
    },
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '3 Second Ago.',
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/world-nature-conservation-day-2023-280643-16x9.jpg?VersionId=887GSLlkezjNnkoZjQ3BoD9IrQFSUs5M&size=690:388',
      strong: 'David Smith',
      p: 'Posted : Auteem dolores qui tempora, expedita, doloribus similique que nam consctetur.'
    },
    {
      name: 'X',
      icon: 'assets/x-icon.png',
      time: '2 Second Ago.',
      img: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg',
      strong: 'James Smith',
      p: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thank You!'
    },
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '1 Second Ago.',
      img: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/462111043.jpg?k=9f846f358bbe1f8f16d9a7146147e5a0f9683951d7dc3f9892a7556aef956dee&o=&hp=1',
      strong: 'Alax Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thank You!'
    },

  ];

  ngOnInit(): void {

    from(this.notifyData).pipe(
      concatMap(res => this.getHtml(res))
    )
    .subscribe(res => {
      this._designUtility.print2(res, 'elContainer')
    })    
  }

  getHtml(data: { name: any; icon: any; time: any; img: any; strong: any; p: any; }){
    return of(
      `
        <div class="header">
          <div class="app">
            <img src="${data.icon}" width="20">
            ${data.name}
          </div>
          <div class="time">${data.time}</div>
        </div>
        <div class="body">
          <img src="${data.img}" height="60px" width="100px" alt="" class="item-img">
          <strong>${data.strong}</strong>
          <p>${data.p}</p>
        </div>
    `
    ).pipe(delay(2000))
  }

}
