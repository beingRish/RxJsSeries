import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent {
  constructor(private _designUtility: DeisgnUtilityService) {}

  asyncVideoEmit: any = '';

  ngOnInit(): void {
    this._designUtility.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video: any) {
    console.log(video.value);
    this._designUtility.asyncVideoEmit.next(video.value)
  }

  // onComplete Method
  onComplete(){
    this._designUtility.asyncVideoEmit.complete();
  }

}

