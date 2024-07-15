import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements AfterViewInit{

  @ViewChild('myInput') myInput!:ElementRef
  @ViewChild('myInput2') myInput2!:ElementRef

  reqData = null;
  reqData2 = null;

  constructor(private loadingBar: LoadingBarService){}

  ngAfterViewInit(): void {

    // Ex - 01 : DebounceTime
    
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    )

    searchTerm.subscribe(res => {
      console.log(res);
      this.reqData = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.reqData = null;
        this.loadingBar.stop();
      },1000)
    })


    
    // Ex - 02 : DistinctUntilChanged
    
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res => {
      console.log(res);
      this.reqData2 = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.reqData2 = null;
        this.loadingBar.stop();
      },1000)
    })

  }

  

}
