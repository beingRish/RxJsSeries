import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, concatMap, exhaustMap, fromEvent, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements AfterViewInit{

  constructor(private http: HttpClient){}

  url = 'https://jsonplaceholder.typicode.com/posts/1'

  num = 0;
  saveRequest:any;
  fetching = false;

  @ViewChild('btn') btn! : ElementRef ;

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this.fetching = true),
      exhaustMap(() => this.onSave(this.num++))
    )
      .subscribe(res => {
        console.log(res);
        this.onFetch()
        this.fetching = false;
      })
  }

  onSave(changes: any){
    return this.http.patch(this.url, { data: changes });
  }

  onFetch() {
    this.http.get<any>(this.url).pipe(
    ).subscribe(res => this.saveRequest = res.data
    
    )}


}
