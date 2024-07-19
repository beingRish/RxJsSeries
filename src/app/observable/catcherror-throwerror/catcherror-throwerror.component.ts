import { Component, OnInit } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';
import { ErrorService } from 'src/app/appServices/error.service';

@Component({
  selector: 'app-catcherror-throwerror',
  templateUrl: './catcherror-throwerror.component.html',
  styleUrls: ['./catcherror-throwerror.component.scss']
})
export class CatcherrorThrowerrorComponent implements OnInit{

  fetching = false;
  allProducts : any;
  errMsg = '';

  constructor(
    private _du : DeisgnUtilityService,
  ){}

  ngOnInit(): void {}

  onGetProducts(){
    this.fetching = true;
    this._du.getProducts().subscribe(
      (res) =>{
        this.allProducts = res;
        this.fetching = false;
      },
      (err) => {
        this.errMsg = err;
        this.fetching = false;
        
      });
  }

  closeError(){
    this.errMsg = '';
  }

}
