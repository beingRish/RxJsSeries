import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeisgnUtilityService{

  productsUrl = 'https://rxjs-sharereplay-default-rtdb.firebaseio.com/';

  exclusive = new Subject<boolean>();

  username = new BehaviorSubject<string>('Rishabh');

  videoEmit = new ReplaySubject<string>(3, 5000);

  asyncVideoEmit = new AsyncSubject();

  constructor(private http: HttpClient) { }

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val;
    
    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val: any, containerId: any) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item')
    el.innerHTML = val;
    
    document.getElementById(containerId)?.prepend(el);
  }

  getProducts() : Observable<any> {
    return this.http.get<any>(this.productsUrl)
  }
}
