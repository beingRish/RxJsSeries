import { Component } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
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
