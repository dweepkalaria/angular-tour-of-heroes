import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../hero';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroService } from './../hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.template.html',
    styleUrls: ['heroes.style.css']
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heros: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heros => {
            this.heros = heros;
        });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    }
}