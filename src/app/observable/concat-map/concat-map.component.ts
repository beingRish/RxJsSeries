import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit{

  constructor(private _designUtility: DeisgnUtilityService) {}

  getData(data : any) {
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }

  ngOnInit(): void {
    
    const source = from(['Tech', 'Comedy', 'News'])

    // Ex - 01 | Map

    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      this._designUtility.print(res2, 'elContainer')
    }))

    // Ex - 02 | MergeMap

    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res => {
      this._designUtility.print(res, 'elContainer2')
    })

    // Ex - 03 | ConcatMap

    source.pipe(
      concatMap(res => this.getData(res)),
    ).subscribe(res => {
      this._designUtility.print(res, 'elContainer3')
    })
  }

}
