import { Component } from '@angular/core';
import { HeroService } from '../Services/hero.service';
import { LogService } from '../Services/log.service';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Comp1Component, Comp2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name: string = "Shobuj";
  remainingStorage: number = 0;
  message: string = "no message";

  constructor(
      private heroService: HeroService,
      private logService: LogService
    ) {} 

  getMessage() {
    this.message = this.heroService.getMessage('no space'); 
    this.logService.log(this.name);
    if (this.remainingStorage === 0) {
      this.logService.error(this.message);
    }
    else {
      this.logService.warn(this.message);
    }

  }

  resetMessage() {
    this.message = "no message";
  }
}
