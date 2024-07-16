import { Component, OnInit } from '@angular/core';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';

@Component({
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">RxJs</a>
                <strong class="badge text-bg-primary" *ngIf="exclusive">Exclusive</strong>
                <button class="navbar-toggler" (click)="onNavTogle()"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" [class.show]="navOpen"  id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link active" aria-current="page" routerLink="promise">Promise</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLink="observable">Observable</a>
                        </li>
                    </ul>
                
                </div>
            </div>
        </nav>
    `,
    styles: [
    ]
})
export class HeaderComponent implements OnInit{

    navOpen: boolean = false;

    exclusive: boolean = false;

    constructor(private _designUtility: DeisgnUtilityService){}

    ngOnInit(): void {
        this._designUtility.exclusive.subscribe(res => {
            this.exclusive = res;
        })
    }

    onNavTogle(){
        this.navOpen = !this.navOpen;;
    }

}