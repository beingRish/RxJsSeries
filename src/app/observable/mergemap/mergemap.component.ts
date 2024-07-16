import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit{

  constructor(private _designUtility: DeisgnUtilityService){}

  getData (data: string){
    return of(data + ' Video Uploaded')
  }

  ngOnInit(): void {
    
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res => res.subscribe(res2 => {
        console.log(res2);
        this._designUtility.print(res2, 'elContainer')
    }))

    // Ex - 02 | Map + MergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer2')
    })

    // Ex - 03 | mergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3')
    })

  }

}
