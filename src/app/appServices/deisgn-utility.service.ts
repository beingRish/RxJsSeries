import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeisgnUtilityService{

  exclusive = new Subject<boolean>();

  username = new BehaviorSubject<string>('Rishabh');

  constructor() { }

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val;
    
    document.getElementById(containerId)?.appendChild(el);
  }
}
