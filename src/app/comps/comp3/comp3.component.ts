import { Component } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  userName: string| undefined;

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
