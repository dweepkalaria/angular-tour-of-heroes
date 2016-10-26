import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.style.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}