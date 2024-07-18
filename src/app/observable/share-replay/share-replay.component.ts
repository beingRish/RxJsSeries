import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit{

  ulr = "https://rxjs-sharereplay-default-rtdb.firebaseio.com/products.json"

  allProducts!: Observable<any>
  mobiles!: Observable<any>
  laptops!: Observable<any>
  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.allProducts = this.http.get(this.ulr).pipe(
      shareReplay()
    );


    this.mobiles = this.allProducts.pipe(
      map(res => res.filter((mobileData: any) => {
        return mobileData['type'] === 'mobile'
      }))
    )

    this.laptops = this.allProducts.pipe(
      map(res => res.filter((laptopData: any) => {
        return laptopData['type'] === 'laptop'
      }))
    )

  }

}
