import { Component, OnInit } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-catcherror-throwerror',
  templateUrl: './catcherror-throwerror.component.html',
  styleUrls: ['./catcherror-throwerror.component.scss']
})
export class CatcherrorThrowerrorComponent implements OnInit{

  fetching = false;
  allProducts : any;
  error = false;
  stringError = '';

  constructor(private _du : DeisgnUtilityService){}

  ngOnInit(): void {}

  onGetProducts(){
    this.fetching = true;
    this._du.getProducts().subscribe(
      (res) =>{
        this.allProducts = res;
        this.fetching = false;
      },
      (err) => {
        console.log(err);
        if(!err.error || err.error.error){
          console.log('Nework Error');
          
          this.stringError = 'Unknown Error';

        }else{
          this.error = err.error.error
        }
        this.fetching = false;
        
      });
  }

  closeError(){
    this.error = false;
  }

}
