import { Component } from '@angular/core';
import { NumListService } from '../Services/num-list.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  list2: number[] = [];

  constructor(private numListService: NumListService) {
    this.list2 = numListService.getList();
  }

  addNumber(num: any) {
    this.numListService.addNum(num);
  }
}
