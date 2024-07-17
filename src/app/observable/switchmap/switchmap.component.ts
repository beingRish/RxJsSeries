import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit{


  constructor(private _designUtility: DeisgnUtilityService){}

  getData (data: string){
    return of(data + ' Video Uploaded').pipe(delay(1000))
  }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | MergeMap
    source.pipe(
      mergeMap(data => this.getData(data))
    )
    .subscribe(res => {
        this._designUtility.print(res, 'elContainer')
    })

    // Ex - 02 | ConcatMap
    source.pipe(
      concatMap(data => this.getData(data)),
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer2')
    })

    // Ex - 03 | SwitchMap
    source.pipe(
      switchMap(data => this.getData(data)),
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3')
    })
  }

}
