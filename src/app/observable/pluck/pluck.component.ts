import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{

  constructor(){}

  users = [
    {
      name: 'Rishabh',
      skills: 'Angular',
      job: {
        title: 'Frontend Developer',
        exp: '1 Years'
      }
    },
    {
      name: 'Vishwjeet',
      skills: 'React',
      job: {
        title: 'FULL STACK Developer',
        exp: '1 Years'
      }
    },
    {
      name: 'Ritik',
      skills: 'HTML and CSS',
      job: {
        title: 'HTML Developer',
        exp: 'Fresher'
      }
    },
    {
      name: 'Antul',
      skills: 'PHP',
      job: {
        title: 'PHP Developer',
        exp: '6 Months'
      }
    }
  ]

  data: any;
  data2: any;

  ngOnInit(): void {
    
    // Ex - 01
    from(this.users).pipe(
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      this.data = res
    })

    // Ex - 02
    from(this.users).pipe(
       pluck('job','title'),
      toArray()
    )
    .subscribe(res => {
      this.data2 = res
    })
  }

}
