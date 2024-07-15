import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{

  dataArr = [
    { id: 1, name: 'Rishabh', gender: 'Male' },
    { id: 2, name: 'Pratibha', gender: 'Female' },
    { id: 3, name: 'Vikash', gender: 'Male' },
    { id: 4, name: 'Divyam', gender: 'Male' },
    { id: 5, name: 'Shivanjali', gender: 'Female' },
    { id: 6, name: 'Arshdeep', gender: 'Female' },
    { id: 7, name: 'Rahul', gender: 'Male' },
    { id: 8, name: 'Triveni', gender: 'Female' },
    { id: 9, name: 'Divya', gender: 'Female' },
    { id: 10, name: 'Parmeet', gender: 'Female' },
    { id: 11, name: 'Pankaj', gender: 'Male' },
    { id: 12, name: 'Utkarsh', gender: 'Male' },
  ]

  data: any;
  data2: any;
  data3: any;

  constructor(){

  }


  ngOnInit(): void {
    
    const source = from(this.dataArr)

    // Ex - 01 : Filter by length

    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
    .subscribe(res => {
      this.data = res;
    })


    // Ex - 02 : Filter by gender

    source.pipe(
      filter(member => member.gender === 'Female'),
      toArray()
    )
    .subscribe(res => {
      this.data2 = res;
    })


    // Ex - 03 : Filter by nth Item

    source.pipe(
      filter(member => member.id<5),
      toArray()
    )
    .subscribe(res => {
      this.data3 = res;
    })

  }


  
}
