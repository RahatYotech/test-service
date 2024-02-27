import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private warning = "You have almost used all of your storage!";
  private error = "You are running out of storage!";
  private message = "";

  constructor() {}

  getMessage(condition: string) {
    if (condition == 'no space') {
      this.message = this.error;
    }
    else {
      this.message = this.warning;  
    }
    return this.message;
  }

}
