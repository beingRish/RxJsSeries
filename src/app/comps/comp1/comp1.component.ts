import { Component, OnInit } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit{

  userName: string | undefined;

  constructor(private _designUtility: DeisgnUtilityService){
    this._designUtility.username.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void { 
  }

  onChange(uname: any){
    console.log(uname.value);
    this._designUtility.username.next(uname.value);
  }

}
