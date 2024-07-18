import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit{

  ulr = "https://rxjs-sharereplay-default-rtdb.firebaseio.com/products.json"
  allProducts: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.ulr).subscribe(res => {
      console.log(res);
      this.allProducts = res;
    })
  }

}
