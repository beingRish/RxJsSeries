import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy{

  username: string | undefined;

  constructor(private _designUtility: DeisgnUtilityService){
    this._designUtility.username.subscribe(res => {
      this.username = res;
    })
  }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
  }

}
