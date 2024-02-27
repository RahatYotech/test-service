import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(name: string) { console.log(`Hello, ${name}!`); }
  error(msg: string) { console.error(`Oops! ${msg}`); }
  warn(msg: string) { console.warn(`Be careful! ${msg}`); }
  
}
