import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit{

  constructor(private _designUtility: DeisgnUtilityService) {}

  // List Data
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List: any[] = [];
  user3List: any[] = [];

  // SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscriptions
  subscription2: Subscription = new Subscription;
  subscription3: Subscription = new Subscription;
  intSubscription: Subscription = new Subscription;

  // Toggle Properties
  methodInterval: boolean = false;

  ngOnInit(): void {
    this._designUtility.videoEmit.subscribe(res => {  
      console.log(res);
      this.user1List.push(res);
    })
  }

  onVideoAdd(video: any) {
    console.log(video.value);
    this._designUtility.videoEmit.next(video.value)
  }

  // User 2 Subscribe Button
  user2Subscribe() {
    if(this.subscribeMode2){
      this.subscription2.unsubscribe();
    }
   else{
    this.subscription2 = this._designUtility.videoEmit.subscribe((res) => this.user2List.push(res))
   }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  // User 3 Subscribe Button
  user3Subscribe() {
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    }
   else{
    this.subscription3 = this._designUtility.videoEmit.subscribe((res) => this.user3List.push(res))
   }
    this.subscribeMode3 = !this.subscribeMode3;
  }


  // Toggle Method
  toggleMethod(){
    const broadCastVideo = interval(1000);

    if(!this.methodInterval){
      this.intSubscription = broadCastVideo.subscribe(res => {
        this._designUtility.videoEmit.next('Video ' + res);
      })
    }
    else{
      this.intSubscription.unsubscribe()
    }

    this.methodInterval = !this.methodInterval;
  }

}
