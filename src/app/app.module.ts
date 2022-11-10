import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [//below are the modules why application need
    BrowserModule,
    AppRoutingModule,
    FormsModule //For using [(ngModel)]="hero.name"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
