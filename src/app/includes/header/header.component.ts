import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">RxJs</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse"  id="navbarNav">
                    <ul class="navbar-nav ">
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
export class HeaderComponent {

}