import { Injectable } from '@angular/core'

import { Hero } from './Hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {

        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 9000)
        )
            .then(() =>
                this.getHeroes()
            )
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}