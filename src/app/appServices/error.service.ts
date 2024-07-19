import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(err: HttpErrorResponse) {
  
    let errMsg = '';

    if(!err.error || !err.error.error){
      errMsg = 'There is some Unknown Error. Please Try again After Some Time.'
    }else{
      if(err.error.error == 'Permission denied'){
        errMsg = 'You dont have permission to access this content'
      }
    }
    return throwError(errMsg)
  }
}
