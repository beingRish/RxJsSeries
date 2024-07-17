import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, pluck, zip, forkJoin, take } from 'rxjs';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.scss']
})
export class ZipForkjoinComponent  implements AfterViewInit{

  //Sources
  nameSource = ['Rishabh', 'Ritik', 'Vishwjeet', 'Shashank', 'Shuryanshu', 'Antul', 'Divyam', 'Vikash'];
  colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple', 'grey'];

  // Template References
  @ViewChild('name') name: ElementRef | any;
  @ViewChild('color') color: ElementRef | any;


  ngAfterViewInit(): void {
    
    // Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(4)
      )
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      take(3)
      )

    // Ex - 01 : Zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer')
    })

    // Ex - 02 : ForkJoin

    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer2')
    })


   
  }

  createBox(name: string, color: string, containerId: string){
    
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class",color);
    document?.getElementById(containerId)?.appendChild(el);
    
  }



}
