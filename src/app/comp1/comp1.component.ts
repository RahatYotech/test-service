import { Component } from '@angular/core';
import { NumListService } from '../Services/num-list.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  list1: number[] = [];

  constructor(private numListService: NumListService) {
    this.list1 = numListService.getList();
  }

  addNumber(num: any) {
    this.numListService.addNum(num);
  }
}
