import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeisgnUtilityService {

  constructor() { }

  print(val: string, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val;
    
    document.getElementById(containerId)?.appendChild(el);
  }
}
