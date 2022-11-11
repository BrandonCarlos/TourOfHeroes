import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'//inject in the root, so any class can use this hero.service.ts
})
export class HeroService {

  constructor(
    //here have what call of service-in-service
    private messageService: MessageService //so that HeroService created, create also instance of MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {//return is type array of Hero[]
    const heroes = of(HEROES);//of return a Observable
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
