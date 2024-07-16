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
      img: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg',
      strong: 'Alax Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thank You!'
    },
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '4 Second Ago.',
      img: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg',
      strong: 'Alax Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thank You!'
    },
    {
      name: 'X',
      icon: 'assets/x-icon.png',
      time: '4 Second Ago.',
      img: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg',
      strong: 'Alax Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thank You!'
    },
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '4 Second Ago.',
      img: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg',
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
