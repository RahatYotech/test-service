import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumListService {

  list:number[] = [100];

  constructor() { }

  addNum(num: any) {
    this.list.push(num);
  }

  getList() {
    return this.list;
  }
}
