import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit{

  users = [
    {name: 'Rishabh', skill: 'Angular'},
    {name: 'Vishwjeet', skill: 'React'},
    {name: 'Antul', skill: 'PHP'},
    {name: 'Ritik', skill: 'Html, Css'},
  ]

  constructor(){}

  sourceSub: Subscription = new Subscription;

  ngOnInit(): void {

    // Ex - 01

    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
      )
      .subscribe(res => {
        console.log('========== Ex - 01 ==========');
        console.log(res);   
    })

    // Ex - 02

    console.log('========== Ex - 02 ==========');

    const source2 = from(this.users);

    source2.pipe(toArray())
      .subscribe(res => {
        console.log(res);
        
      })

    // Ex - 03

    console.log('========== Ex - 03 ==========');

    const source3 = of('Rishabh', 'Ritik', 'Vishwjeet', 'Antul')

    source3.pipe(
      toArray()
      )
      .subscribe(res => {
        console.log(res);
        
      })

  }

  

}
