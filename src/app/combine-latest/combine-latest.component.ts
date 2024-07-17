import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements AfterViewInit{

  //Sources
  nameSource = ['Rishabh', 'Ritik', 'Vishwjeet', 'Shashank', 'Shuryanshu', 'Antul', 'Divyam', 'Vikash'];
  colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple', 'grey'];

  // Template References
  @ViewChild('name') name: ElementRef | any;
  @ViewChild('color') color: ElementRef | any;


  ngAfterViewInit(): void {
    
    // Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value))
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(pluck('target', 'value'))

    // Ex - 01 : CombineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color])=>{
      
      this.createBox(name, color, 'elContainer')
    })

    // Ex - 02 : withLatestFrom
    // Master nameObs
    // Slave colorObs

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color])=>{
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
